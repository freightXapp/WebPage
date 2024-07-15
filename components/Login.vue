<template>
  <div class="form-container">
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
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
        />
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
        />
      </div>

      <button :disabled="isSubmitting" type="submit">
        <div v-if="isSubmitting" class="loading-spinner" />
        <span v-else>Login</span>
      </button>
      <span v-if="message" class="message">{{ message }}</span>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { z } from 'zod';

type FormValues = {
  email: string;
  password: string;
};

const form: FormValues = reactive({
  email: '',
  password: '',
});

const errors: Record<string, string | null | boolean> = reactive({
  email: false,
  password: false,
});

const fieldSchemas = {
  email: z.string().email('Email is not valid'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
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
    const { data, error } = await useFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    if (error.value) {
      message.value = 'An error occurred';
    } else {
      message.value = 'Login successful';
      // Save tokens to local storage or cookies as needed
      localStorage.setItem('accessToken', data.value.accessToken);
      localStorage.setItem('refreshToken', data.value.refreshToken);
    }
  } catch (error) {
    console.error(error);
    message.value = 'An error occurred';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
