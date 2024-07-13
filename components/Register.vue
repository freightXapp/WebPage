<template>
  <div class="form-container">
    <h1>Register</h1>
    <form @submit.prevent="submitForm">
      <!-- Company Name Field -->
      <div :class="{ error: errors.companyName }">
        <label for="companyName">{{
          errors.companyName ? errors.companyName : "Company Name:"
        }}</label>
        <input
          id="companyName"
          v-model="form.companyName"
          type="text"
          placeholder="Enter your company name"
          @blur="validateField('companyName')"
          @input="validateFieldOnError('companyName')"
        >
      </div>

      <!-- Country Name Field -->
      <div :class="{ error: errors.countryName }">
        <label for="countryName">{{
          errors.countryName ? errors.countryName : "Country Name:"
        }}</label>
        <input
          id="countryName"
          v-model="form.countryName"
          type="text"
          placeholder="Enter your country name"
          @blur="validateField('countryName')"
          @input="validateFieldOnError('countryName')"
        >
      </div>

      <!-- Email Field -->
      <div :class="{ error: errors.email }">
        <label for="email">{{ errors.email ? errors.email : "Email:" }}</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Enter your email address"
          @blur="validateField('email')"
          @input="validateFieldOnError('email')"
        >
      </div>

      <!-- Password Field -->
      <div :class="{ error: errors.password }">
        <label for="password">{{ errors.password ? errors.password : "Password:" }}</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          placeholder="Enter your password"
          @blur="validateField('password')"
          @input="validateFieldOnError('password')"
        >
      </div>

      <!-- Repeat Password Field -->
      <div :class="{ error: errors.repeatPassword }">
        <label for="repeatPassword">{{
          errors.repeatPassword ? errors.repeatPassword : "Repeat Password:"
        }}</label>
        <input
          id="repeatPassword"
          v-model="form.repeatPassword"
          type="password"
          placeholder="Repeat your password"
          @blur="validateField('repeatPassword')"
          @input="validateFieldOnError('repeatPassword')"
        >
      </div>

      <!-- Phone Number Field -->
      <div :class="{ error: errors.phone }">
        <label for="phone">{{
          errors.phone ? errors.phone : "Phone Number:"
        }}</label>
        <div class="phone-container">
          <CustomDropdown v-model:code="form.countryCode" />
          <input
            id="phone"
            v-model="form.phone"
            type="text"
            placeholder="Enter your phone number"
            @blur="validateField('phone')"
            @input="validateFieldOnError('phone')"
          >
        </div>
      </div>

      <button :disabled="isSubmitting" type="submit">
        <div v-if="isSubmitting" class="loading-spinner" />
        <span v-else>Register</span>
      </button>
      <span v-if="message" class="message">{{ message }}</span>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { z } from 'zod';

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
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
  repeatPassword: z.string().min(1, 'Repeat Password is required').refine((val) => 
    val === form.password,{
        message: "Passwords don't match"
    }
  ),
  phone: z.string().min(1, 'Phone number is required'),
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
const message = ref<string | null>(null);

const submitForm = async () => {
  if (hasErrors()) {
    return;
  }
  try {
    isSubmitting.value = true;
    // Perform API request here
    message.value = 'Registration successful';
  } catch (error) {
    console.error(error);
    message.value = 'An error occurred';
  } finally {
    isSubmitting.value = false;
  }
};
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
