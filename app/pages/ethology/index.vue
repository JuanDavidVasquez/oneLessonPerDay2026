<template>
  <section class="ethology-section">
    <!-- Elementos decorativos de fondo -->
    <div class="background-decoration">
      <div class="deco-shape shape-1"></div>
      <div class="deco-shape shape-2"></div>
      <div class="deco-shape shape-3"></div>
      <div class="paw-pattern"></div>
    </div>

    <div class="ethology-container">
      <!-- Header de la secciÃ³n -->
      <div class="section-header" ref="sectionHeader">
        <div class="header-badge">
          <i class="pi pi-book"></i>
          <span>{{ t('ethology.badge') }}</span>
        </div>
        <h1 class="section-title">
          <span class="title-highlight">{{ t('ethology.title') }}</span>
          <span class="title-subtitle">{{ t('ethology.subtitle') }}</span>
        </h1>
        <p class="section-intro">
          {{ t('ethology.introduction') }}
        </p>
      </div>

      <!-- Contenido principal en tabs -->
      <div class="ethology-tabs" ref="tabsSection">
        <div class="tabs-navigation">
          <button 
            v-for="(tab, index) in tabs" 
            :key="index"
            :class="['tab-button', { active: activeTab === index }]"
            @click="activeTab = index"
          >
            <i :class="`pi ${tab.icon}`"></i>
            <span>{{ tab.title }}</span>
          </button>
        </div>

        <div class="tabs-content">
          <transition name="tab-fade" mode="out-in">
            <div :key="activeTab" class="tab-panel">
              <!-- Panel de Comportamiento Canino -->
              <div v-if="activeTab === 0" class="dogs-panel">
                <div class="panel-header">
                  <img src="/dog-behavior.jpg" alt="Comportamiento canino" class="panel-image">
                  <div class="panel-intro">
                    <h2>{{ t('ethology.dogs.title') }}</h2>
                    <p>{{ t('ethology.dogs.description') }}</p>
                  </div>
                </div>

                <div class="behavior-grid">
                  <div class="behavior-card" v-for="(behavior, idx) in dogBehaviors" :key="idx">
                    <div class="card-icon">
                      <i :class="`pi ${behavior.icon}`"></i>
                    </div>
                    <h3>{{ behavior.title }}</h3>
                    <p>{{ behavior.description }}</p>
                    <div class="card-tips">
                      <h4>{{ behavior.subtitle }}</h4>
                      <ul>
                        <li v-for="(tip, tipIdx) in behavior.tips" :key="tipIdx">{{ tip }}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- SeÃ±ales de calma -->
                <div class="calming-signals">
                  <h3>{{ t('ethology.dogs.calmingSignals') }}</h3>
                  <div class="signals-grid">
                    <div class="signal-item" v-for="(signal, idx) in calmingSignals" :key="idx">
                      <div class="signal-icon">
                        <i class="pi pi-info-circle"></i>
                      </div>
                      <div class="signal-content">
                        <h4>{{ signal.name }}</h4>
                        <p>{{ signal.meaning }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Panel de Comportamiento Felino -->
              <div v-if="activeTab === 1" class="cats-panel">
                <div class="panel-header">
                  <img src="/cat-behavior.jpg" alt="Comportamiento felino" class="panel-image">
                  <div class="panel-intro">
                    <h2>{{ t('ethology.cats.title') }}</h2>
                    <p>{{ t('ethology.cats.description') }}</p>
                  </div>
                </div>

                <div class="behavior-grid">
                  <div class="behavior-card" v-for="(behavior, idx) in catBehaviors" :key="idx">
                    <div class="card-icon">
                      <i :class="`pi ${behavior.icon}`"></i>
                    </div>
                    <h3>{{ behavior.title }}</h3>
                    <p>{{ behavior.description }}</p>
                    <div class="card-tips">
                      <h4>{{ behavior.subtitle }}</h4>
                      <ul>
                        <li v-for="(tip, tipIdx) in behavior.tips" :key="tipIdx">{{ tip }}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Lenguaje corporal felino -->
                <div class="body-language">
                  <h3>{{ t('ethology.cats.bodyLanguage') }}</h3>
                  <div class="language-cards">
                    <div class="language-card" v-for="(item, idx) in catBodyLanguage" :key="idx">
                      <div class="card-header">
                        <i :class="`pi ${item.icon}`"></i>
                        <h4>{{ item.part }}</h4>
                      </div>
                      <p>{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Panel de Consejos Generales -->
              <div v-if="activeTab === 2" class="tips-panel">
                <div class="tips-header">
                  <h2>{{ t('ethology.generalTips.title') }}</h2>
                  <p>{{ t('ethology.generalTips.description') }}</p>
                </div>

                <!-- CategorÃ­as de consejos -->
                <div class="tips-categories">
                  <!-- PreparaciÃ³n del hogar -->
                  <div class="tip-category">
                    <div class="category-header">
                      <i class="pi pi-home"></i>
                      <h3>{{ t('ethology.generalTips.homePreparation') }}</h3>
                    </div>
                    <div class="tip-cards">
                      <div class="tip-card" v-for="(tip, idx) in homePreparationTips" :key="idx">
                        <span class="tip-number">{{ idx + 1 }}</span>
                        <div class="tip-content">
                          <h4>{{ tip.title }}</h4>
                          <p>{{ tip.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- SocializaciÃ³n -->
                  <div class="tip-category">
                    <div class="category-header">
                      <i class="pi pi-users"></i>
                      <h3>{{ t('ethology.generalTips.socialization') }}</h3>
                    </div>
                    <div class="tip-cards">
                      <div class="tip-card" v-for="(tip, idx) in socializationTips" :key="idx">
                        <span class="tip-number">{{ idx + 1 }}</span>
                        <div class="tip-content">
                          <h4>{{ tip.title }}</h4>
                          <p>{{ tip.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Salud y bienestar -->
                  <div class="tip-category">
                    <div class="category-header">
                      <i class="pi pi-heart"></i>
                      <h3>{{ t('ethology.generalTips.healthWellbeing') }}</h3>
                    </div>
                    <div class="tip-cards">
                      <div class="tip-card" v-for="(tip, idx) in healthTips" :key="idx">
                        <span class="tip-number">{{ idx + 1 }}</span>
                        <div class="tip-content">
                          <h4>{{ tip.title }}</h4>
                          <p>{{ tip.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- FAQ Section -->
                <div class="faq-section">
                  <h3>{{ t('ethology.faq.title') }}</h3>
                  <div class="faq-items">
                    <div 
                      class="faq-item" 
                      v-for="(faq, idx) in faqs" 
                      :key="idx"
                      :class="{ active: activeFaq === idx }"
                    >
                      <button class="faq-question" @click="toggleFaq(idx)">
                        <span>{{ faq.question }}</span>
                        <i :class="`pi ${activeFaq === idx ? 'pi-minus' : 'pi-plus'}`"></i>
                      </button>
                      <transition name="faq-slide">
                        <div v-show="activeFaq === idx" class="faq-answer">
                          <p>{{ faq.answer }}</p>
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- SecciÃ³n de recursos adicionales -->
      <div class="resources-section" ref="resourcesSection">
        <h2 class="resources-title">{{ t('ethology.resources.title') }}</h2>
        <div class="resources-grid">
          <!-- GuÃ­as descargables -->
          <div class="resource-card">
            <div class="resource-icon">
              <i class="pi pi-download"></i>
            </div>
            <h3>{{ t('ethology.resources.guides') }}</h3>
            <p>{{ t('ethology.resources.guidesDesc') }}</p>
            <button class="resource-btn">
              <i class="pi pi-file-pdf"></i>
              {{ t('ethology.resources.downloadGuides') }}
            </button>
          </div>

          <!-- Videos educativos -->
          <div class="resource-card">
            <div class="resource-icon">
              <i class="pi pi-video"></i>
            </div>
            <h3>{{ t('ethology.resources.videos') }}</h3>
            <p>{{ t('ethology.resources.videosDesc') }}</p>
            <button class="resource-btn">
              <i class="pi pi-play"></i>
              {{ t('ethology.resources.watchVideos') }}
            </button>
          </div>

          <!-- Consulta con expertos -->
          <div class="resource-card featured">
            <div class="resource-icon">
              <i class="pi pi-comments"></i>
            </div>
            <h3>{{ t('ethology.resources.experts') }}</h3>
            <p>{{ t('ethology.resources.expertsDesc') }}</p>
            <button class="resource-btn primary">
              <i class="pi pi-calendar"></i>
              {{ t('ethology.resources.scheduleConsult') }}
            </button>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section" ref="ctaSection">
        <div class="cta-content">
          <h2>{{ t('ethology.cta.title') }}</h2>
          <p>{{ t('ethology.cta.description') }}</p>
          <div class="cta-buttons">
            <NuxtLink to="/adopcion" class="btn-primary">
              <i class="pi pi-heart"></i>
              {{ t('ethology.cta.adoptButton') }}
            </NuxtLink>
            <NuxtLink to="/contacto" class="btn-secondary">
              <i class="pi pi-phone"></i>
              {{ t('ethology.cta.contactButton') }}
            </NuxtLink>
          </div>
        </div>
        <div class="cta-image">
          <img src="/happy-pets.jpg" alt="Mascotas felices">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const { t } = useI18n()

// Refs para animaciones
const sectionHeader = ref(null)
const tabsSection = ref(null)
const resourcesSection = ref(null)
const ctaSection = ref(null)

// Estado de tabs
const activeTab = ref(0)
const activeFaq = ref<number | null>(null)

// Tabs data
const tabs = ref([
  { title: t('ethology.tabs.dogs'), icon: 'pi-heart' },
  { title: t('ethology.tabs.cats'), icon: 'pi-star' },
  { title: t('ethology.tabs.general'), icon: 'pi-info-circle' }
])

// Comportamientos caninos
const dogBehaviors = ref([
  {
    icon: 'pi-megaphone',
    title: t('ethology.dogs.barking.title'),
    subtitle: t('ethology.dogs.barking.subtitle'),
    description: t('ethology.dogs.barking.description'),
    tips: [
      t('ethology.dogs.barking.tip1'),
      t('ethology.dogs.barking.tip2'),
      t('ethology.dogs.barking.tip3')
    ]
  },
  {
    icon: 'pi-flag',
    title: t('ethology.dogs.marking.title'),
    subtitle: t('ethology.dogs.marking.subtitle'),
    description: t('ethology.dogs.marking.description'),
    tips: [
      t('ethology.dogs.marking.tip1'),
      t('ethology.dogs.marking.tip2')
    ]
  },
  {
    icon: 'pi-bolt',
    title: t('ethology.dogs.anxiety.title'),
    subtitle: t('ethology.dogs.anxiety.subtitle'),
    description: t('ethology.dogs.anxiety.description'),
    tips: [
      t('ethology.dogs.anxiety.tip1'),
      t('ethology.dogs.anxiety.tip2'),
      t('ethology.dogs.anxiety.tip3')
    ]
  }
])

// SeÃ±ales de calma
const calmingSignals = ref([
  {
    name: t('ethology.dogs.signals.yawn'),
    meaning: t('ethology.dogs.signals.yawnMeaning')
  },
  {
    name: t('ethology.dogs.signals.lick'),
    meaning: t('ethology.dogs.signals.lickMeaning')
  },
  {
    name: t('ethology.dogs.signals.turn'),
    meaning: t('ethology.dogs.signals.turnMeaning')
  },
  {
    name: t('ethology.dogs.signals.sniff'),
    meaning: t('ethology.dogs.signals.sniffMeaning')
  }
])

// Comportamientos felinos
const catBehaviors = ref([
  {
    icon: 'pi-box',
    title: t('ethology.cats.scratching.title'),
    subtitle: t('ethology.cats.scratching.subtitle'),
    description: t('ethology.cats.scratching.description'),
    tips: [
      t('ethology.cats.scratching.tip1'),
      t('ethology.cats.scratching.tip2')
    ]
  },
  {
    icon: 'pi-moon',
    title: t('ethology.cats.nocturnal.title'),
    subtitle: t('ethology.cats.nocturnal.subtitle'),
    description: t('ethology.cats.nocturnal.description'),
    tips: [
      t('ethology.cats.nocturnal.tip1'),
      t('ethology.cats.nocturnal.tip2'),
      t('ethology.cats.nocturnal.tip3')
    ]
  },
  {
    icon: 'pi-shield',
    title: t('ethology.cats.hiding.title'),
    subtitle: t('ethology.cats.hiding.subtitle'),
    description: t('ethology.cats.hiding.description'),
    tips: [
      t('ethology.cats.hiding.tip1'),
      t('ethology.cats.hiding.tip2')
    ]
  }
])

// Lenguaje corporal felino
const catBodyLanguage = ref([
  {
    icon: 'pi-eye',
    part: t('ethology.cats.body.eyes'),
    description: t('ethology.cats.body.eyesDesc')
  },
  {
    icon: 'pi-wifi',
    part: t('ethology.cats.body.tail'),
    description: t('ethology.cats.body.tailDesc')
  },
  {
    icon: 'pi-volume-up',
    part: t('ethology.cats.body.ears'),
    description: t('ethology.cats.body.earsDesc')
  },
  {
    icon: 'pi-circle',
    part: t('ethology.cats.body.posture'),
    description: t('ethology.cats.body.postureDesc')
  }
])

// Consejos de preparaciÃ³n del hogar
const homePreparationTips = ref([
  {
    title: t('ethology.tips.home.safe'),
    description: t('ethology.tips.home.safeDesc')
  },
  {
    title: t('ethology.tips.home.space'),
    description: t('ethology.tips.home.spaceDesc')
  },
  {
    title: t('ethology.tips.home.supplies'),
    description: t('ethology.tips.home.suppliesDesc')
  }
])

// Consejos de socializaciÃ³n
const socializationTips = ref([
  {
    title: t('ethology.tips.social.gradual'),
    description: t('ethology.tips.social.gradualDesc')
  },
  {
    title: t('ethology.tips.social.positive'),
    description: t('ethology.tips.social.positiveDesc')
  },
  {
    title: t('ethology.tips.social.routine'),
    description: t('ethology.tips.social.routineDesc')
  }
])

// Consejos de salud
const healthTips = ref([
  {
    title: t('ethology.tips.health.checkups'),
    description: t('ethology.tips.health.checkupsDesc')
  },
  {
    title: t('ethology.tips.health.nutrition'),
    description: t('ethology.tips.health.nutritionDesc')
  },
  {
    title: t('ethology.tips.health.exercise'),
    description: t('ethology.tips.health.exerciseDesc')
  }
])

// FAQs
const faqs = ref([
  {
    question: t('ethology.faq.q1'),
    answer: t('ethology.faq.a1')
  },
  {
    question: t('ethology.faq.q2'),
    answer: t('ethology.faq.a2')
  },
  {
    question: t('ethology.faq.q3'),
    answer: t('ethology.faq.a3')
  },
  {
    question: t('ethology.faq.q4'),
    answer: t('ethology.faq.a4')
  }
])

// Funciones
const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

// Animaciones al scroll
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  if (sectionHeader.value) observer.observe(sectionHeader.value)
  if (tabsSection.value) observer.observe(tabsSection.value)
  if (resourcesSection.value) observer.observe(resourcesSection.value)
  if (ctaSection.value) observer.observe(ctaSection.value)
})
</script>