import { z } from "zod";
import { useI18n } from "vue-i18n";

export const useLoginSchema = () => {
  const { t } = useI18n();

  const schema = z.object({
    email: z
      .string()
      .min(1, { message: t("validation.emailRequired") })
      .email({ message: t("validation.emailInvalid") }),

    password: z
      .string()
      .min(8, { message: t("validation.passwordMin") })
      .regex(/[A-Z]/, { message: t("validation.passwordUpper") })
      .regex(/[a-z]/, { message: t("validation.passwordLower") })
      .regex(/\d/, { message: t("validation.passwordNumber") }),

    terms: z
      .boolean()
      .refine((val) => val === true, {
        message: t("validation.acceptTerms"),
      }),
  });

  return schema;
};

export type LoginFormData = z.infer<ReturnType<typeof useLoginSchema>>;
