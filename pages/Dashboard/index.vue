<template>
  <div class="form-container">
    {{ message }}
</div>
</template>

<script lang="ts" setup>
import { z } from 'zod';
import { isValidPhoneNumber } from "libphonenumber-js";
import { useRequestHeaders } from 'nuxt/app';
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

type FormValues = {
  companyName: string;
  countryName: string;
  email: string;
  password: string;
  repeatPassword: string;
  phone: string;
  countryCode: string;
};
const form: FormValues = reactive({
  companyName: '',
  countryName: '',
  email: '',
  password: '',
  repeatPassword: '',
  phone: '',
  countryCode: '',
});

const errors: Record<string, string | null | boolean> = reactive({
  companyName: false,
  countryName: false, 
  email: false,
  password: false,
  repeatPassword: false,
  phone: false,
  countryCode: false,
});

const fieldSchemas = {
  companyName: z.string().min(1, 'Company Name is required'),
  countryName: z.string().min(1, 'Country Name is required'),
  email: z.string().email('Email is not valid'),
  password: z
    .string(),
    // .min(8, 'Password must be at least 8 characters long')
    // .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    // .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    // .regex(/[0-9]/, 'Password must contain at least one number')
    // .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
//   repeatPassword: z.string().min(1, 'Repeat Password is required').refine((val) =>  // TODO remove comment 
//     val === form.password,{
//         message: "Passwords don't match"
//     }
//   ),

repeatPassword: z // TODO JUST FOR TESTING !!!
    .string()
    .min(1, 'Repeat Password is required'),
  phone: z.string() .refine(
      (phone) => isValidPhoneNumber(form.countryCode + phone),
      "Phone number is not valid"
    ),
  countryCode: z.string().min(1, 'Country code is required'),
};

const validateFieldOnError = (fieldName: keyof FormValues) => {
  if (errors[fieldName]) {
    const result = fieldSchemas[fieldName].safeParse(form[fieldName]);
    if (!result.success) {
      errors[fieldName] = result.error.errors[0].message;
    } else {
      errors[fieldName] = null;
    }
  }
};

const validateField = (fieldName: keyof FormValues) => {
  const result = fieldSchemas[fieldName].safeParse(form[fieldName]);
  if (!result.success) {
    errors[fieldName] = result.error.errors[0].message;
  } else {
    errors[fieldName] = null;
  }
};

const hasErrors = () => {
  Object.keys(form).forEach((fieldName) => {
    validateField(fieldName as keyof FormValues);
  });
  return Object.values(errors).some((error) => error !== null);
};

const isSubmitting = ref(false);
const message = ref<string>('');


    const headers1 = useRequestHeaders(['cookie']).cookie;
const submitForm = async () => {
    isSubmitting.value = true;
    const data = await $fetch(`${baseUrl}/auth/dashboard`, {
      method: 'GET',
     headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    console.log(data);
    message.value = data
};
onMounted(async() => {
    await submitForm()
})
</script>

<style scoped>
.form-container {
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  margin-top: 10rem;

  h1 {
    text-align: center;
    font-size: 2.7rem;
    margin-bottom: 3rem;
    font-weight: 500;
  }
}

.form-container .error label {
  color: red;
}

.form-container input,
.form-container button {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 0.1rem solid var(--border);
  border-radius: 0.5rem;
  &::placeholder {
    font-size: 1.6rem;
    color: var(--text-grey);
    font-weight: 300;
  }
}

.form-container input:focus,
.form-container input:hover,
.form-container button:focus,
.form-container button:hover {
  outline: none;
  border-color: var(--main-blue);
  box-shadow: 0 0 5px rgba(2, 85, 174, 0.5);
  transition: all 0.3s;
}

.form-container .error input {
  border-color: red;
  color: red;
}

.form-container button {
  background-color: var(--main-blue);
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
}

.form-container button:disabled {
  background-color: #ccc;
}

.loading-spinner {
  display: inline-block;
  width: 1.7rem;
  height: 1.7rem;
  border: 0.2rem solid var(--main-blue);
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.message {
  color: green;
  text-align: center;
  margin-top: 10px;
}
</style>
