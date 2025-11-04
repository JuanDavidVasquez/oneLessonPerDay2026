<script setup lang="ts">
import { onMounted } from "vue";
import { useLoginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "vee-validate";
import { useI18n } from "vue-i18n";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useMainStore } from "~/store/main.store";

// 🔹 Store global
const mainStore = useMainStore();
const router = useRouter();

declare global {
  interface Window {
    google?: any;
  }
}

const { t } = useI18n();

// ✅ Esquema de validación con Zod
const schema = useLoginSchema();

// ✅ Formulario con vee-validate
const { handleSubmit, errors, values } = useForm({
  validationSchema: zodResolver(schema),
});

// ✅ Configuración base de Axios (para login clásico)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// ✅ Login clásico (email + password)
const onSubmit = handleSubmit(async (formData: any) => {
  try {
    const { data } = await api.post("/auth/login", formData);
    console.log("✅ Login exitoso:", data);

    // Simulación de guardado de usuario
    mainStore.setUser({
      name: data.user?.name || "Usuario",
      email: formData.email,
      picture: "/default-avatar.png",
      token: data.token,
    });

    alert("✅ Login clásico exitoso con " + formData.email);
  } catch (err: any) {
    console.error("❌ Error en login:", err.response?.data || err);
    alert(err.response?.data?.message || t("login.error"));
  }
});

// ✅ Google Login (solo captura datos)
async function handleGoogleCredentialResponse(response: any) {
  try {
    const googleToken = response.credential;
    const decoded: any = jwtDecode(googleToken);
    const { name, email, picture } = decoded;

    // ✅ Guardamos en Pinia
    mainStore.setUser({
      name,
      email,
      picture,
      token: googleToken,
    });

    alert(`✅ Bienvenido ${name}\n📧 ${email}`);
    console.log("🧩 Datos del usuario Google:", decoded);

    if(name){
       router.push("/pets");
    }
    //TODO: token al backend:
    // await api.post("/auth/google", { token: googleToken });

  } catch (error) {
    console.error("❌ Error en login con Google:", error);
    alert(t("login.errorGoogle"));
  }
}

// ✅ Inicializar Google en el montaje
onMounted(() => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  if (!clientId) {
    console.error("⚠️ No se encontró VITE_GOOGLE_CLIENT_ID en el .env");
    return;
  }

  if (!window.google) {
    console.error("❌ Google API no está disponible");
    return;
  }

  window.google.accounts.id.initialize({
    client_id: clientId,
    callback: handleGoogleCredentialResponse,
  });

  window.google.accounts.id.renderButton(
    document.getElementById("google-login"),
    {
      theme: "outline",
      size: "large",
      shape: "rectangular",
      text: "continue_with",
      width: 280,
    }
  );
});
</script>

<template>
  <section class="login-section">
    <form @submit.prevent="onSubmit" class="login-form">
      <!-- Email -->
      <div class="form-group">
        <input
          v-model="values.email"
          type="email"
          :placeholder="t('login.emailPlaceholder')"
        />
        <p v-if="errors.email" class="error-msg">{{ errors.email }}</p>
      </div>

      <!-- Password -->
      <div class="form-group">
        <input
          v-model="values.password"
          type="password"
          :placeholder="t('login.passwordPlaceholder')"
        />
        <p v-if="errors.password" class="error-msg">{{ errors.password }}</p>
      </div>

      <!-- Terms -->
      <div class="form-group checkbox-group">
        <label>
          <input type="checkbox" v-model="values.terms" />
          {{ t("login.acceptTermsLabel") }}
        </label>
        <p v-if="errors.terms" class="error-msg">{{ errors.terms }}</p>
      </div>

      <!-- Botón de login normal -->
      <button type="submit" class="btn-primary">
        {{ t("login.submitButton") }}
      </button>

      <!-- Separador -->
      <div class="divider">
        <span>{{ t("login.orContinueWith") }}</span>
      </div>

      <!-- Botón de Google -->
      <div id="google-login" class="google-button"></div>
    </form>
  </section>
</template>

<style scoped>
.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background: #fafafa;
}

.login-form {
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

input[type="email"],
input[type="password"] {
  padding: 0.7rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.error-msg {
  font-size: 0.85rem;
  color: red;
  margin-top: 0.3rem;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.divider {
  text-align: center;
  color: #999;
  font-size: 0.85rem;
  margin: 1rem 0;
}

.google-button {
  display: flex;
  justify-content: center;
}
</style>
