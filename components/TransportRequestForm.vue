<template>
  <div class="form-container">
    <h1>Transport Request Form</h1>
    <form @submit.prevent.stop="submitForm">
      <!-- Full Name Field -->
      <div :class="{ error: errors.fullName }">
        <label for="fullName">{{ errors.fullName ? errors.fullName : 'Full Name:' }}</label>
        <input
          id="fullName"
          v-model="form.fullName"
          type="text"
          @blur="validateField('fullName')"
          @input="validateFieldOnError('fullName')"
        >
      </div>

      <!-- Email Field -->
      <div :class="{ error: errors.email }">
        <label for="email">{{ errors.email ? errors.email : 'Email:' }}</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          @blur="validateField('email')"
          @input="validateFieldOnError('email')"
        >
      </div>

      <!-- Phone Field TEST-->
      <div :class="{ error: errors.phone }">
        <label for="phone">{{ errors.phone ? errors.phone : 'Phone Number:' }}</label>
        <div class="phone-container">
          <CustomDropdown v-model:code="form.countryCode" />
          <input
            id="phone"
            v-model="form.phone"
            type="text"
            @blur="validateField('phone')"
            @input="validateFieldOnError('phone')"
          >
        </div>
      </div>

      <!-- Pickup Location Field -->
      <div :class="{ error: errors.pickupLocation }">
        <label for="pickupLocation">{{ errors.pickupLocation ? errors.pickupLocation : 'Pickup Location:' }}</label>
        <input
          id="pickupLocation"
          v-model="form.pickupLocation"
          type="text"
          @blur="validateField('pickupLocation')"
          @input="validateFieldOnError('pickupLocation')"
        >
      </div>

      <!-- Dropoff Location Field -->
      <div :class="{ error: errors.dropoffLocation }">
        <label for="dropoffLocation">{{ errors.dropoffLocation ? errors.dropoffLocation : 'Dropoff Location:' }}</label>
        <input
          id="dropoffLocation"
          v-model="form.dropoffLocation"
          type="text"
          @blur="validateField('dropoffLocation')"
          @input="validateFieldOnError('dropoffLocation')"
        >
      </div>

      <!-- Goods Description Field -->
      <div :class="{ error: errors.goodsDescription }">
        <label for="goodsDescription">{{ errors.goodsDescription ? errors.goodsDescription : 'Goods Description:' }}</label>
        <textarea
          id="goodsDescription"
          v-model="form.goodsDescription"
          rows="4"
          @blur="validateField('goodsDescription')"
          @input="validateFieldOnError('goodsDescription')"
        />
      </div>

      <!-- Weight Field -->
      <div :class="{ error: errors.weight }">
        <label for="weight">{{ errors.weight ? errors.weight : 'Weight:' }}</label>
        <input
          id="weight"
          v-model="form.weight"
          type="number"
          @blur="validateField('weight')"
          @input="validateFieldOnError('weight')"
        >
      </div>

      <!-- Dimensions Field -->
      <div :class="{ error: errors.dimensions }">
        <label for="dimensions">{{ errors.dimensions ? errors.dimensions : 'Dimensions (L x W x H):' }}</label>
        <input
          id="dimensions"
          v-model="form.dimensions"
          type="text"
          @blur="validateField('dimensions')"
          @input="validateFieldOnError('dimensions')"
        >
      </div>

      <!-- Pickup DateTime Field -->
      <div :class="{ error: errors.pickupDateTime }">
        <label for="pickupDateTime">{{ errors.pickupDateTime ? errors.pickupDateTime : 'Pickup Date and Time:' }}</label>
        <input
          id="pickupDateTime"
          v-model="form.pickupDateTime"
          type="datetime-local"
          @blur="validateField('pickupDateTime')"
          @input="validateFieldOnError('pickupDateTime')"
        >
      </div>

      <!-- Delivery DateTime Field -->
      <div :class="{ error: errors.deliveryDateTime }">
        <label for="deliveryDateTime">{{ errors.deliveryDateTime ? errors.deliveryDateTime : 'Delivery Date and Time:' }}</label>
        <input
          id="deliveryDateTime"
          v-model="form.deliveryDateTime"
          type="datetime-local"
          @blur="validateField('deliveryDateTime')"
          @input="validateFieldOnError('deliveryDateTime')"
        >
      </div>

      <!-- Special Instructions Field -->
      <div :class="{ error: errors.specialInstructions }">
        <label for="specialInstructions">{{ errors.specialInstructions ? errors.specialInstructions : 'Special Instructions:' }}</label>
        <textarea
          id="specialInstructions"
          v-model="form.specialInstructions"
          rows="4"
          @blur="validateField('specialInstructions')"
          @input="validateFieldOnError('specialInstructions')"
        />
      </div>

      <button :disabled="isSubmitting" type="submit">
        <div v-if="isSubmitting" class="loading-spinner">Loading...</div>
        <span v-else>Submit</span>
      </button>
      <span v-if="message" class="message">{{ message }}</span>
    </form>
  </div>
</template>


<script lang="ts" setup>
import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

const isSubmitting = ref(false);

type FormValues = {
  fullName: string;
  email: string;
  phone: string; 
  countryCode: string;
  pickupLocation: string;
  dropoffLocation: string;
  goodsDescription: string;
  weight: number;
  dimensions: string;
  pickupDateTime: string;
  deliveryDateTime: string;
  specialInstructions: string;
};

const form: FormValues = reactive({
  fullName: '',
  email: '',
  phone: '',
  countryCode: '+1',
  pickupLocation: '',
  dropoffLocation: '',
  goodsDescription: '',
  weight: 0,
  dimensions: '',
  pickupDateTime: '',
  deliveryDateTime: '',
  specialInstructions: '',
});

const message = ref('');
const errors: Record<string, string | null | boolean> = reactive({
  fullName: false,
  email: false,
  phone: false,
  pickupLocation: false,
  dropoffLocation: false,
  goodsDescription: false,
  weight: false,
  dimensions: false,
  pickupDateTime: false,
  deliveryDateTime: false,
  specialInstructions: false,
});

const fieldSchemas = {
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Email is not valid'),
  phone: z.string().refine((phone) => isValidPhoneNumber(form.countryCode + phone), 'Phone number is not valid'),
    countryCode: z.string().min(1, 'Country code is required'),
  pickupLocation: z.string().min(1, 'Pickup Location is required'),
  dropoffLocation: z.string().min(1, 'Dropoff Location is required'),
  goodsDescription: z.string().min(10, 'Goods Description must be at least 10 characters long'),
  weight: z.number().positive('Weight must be a positive number'),
  dimensions: z.string().min(1, 'Dimensions are required'),
  pickupDateTime: z.string()
    .min(1, 'Pickup Date and Time is required')
    .refine((date) => {
      const pickupDate = new Date(date);
      const today = new Date();
      return pickupDate >= today;
    }, 'Pickup Date and Time cannot be in the past'),
  deliveryDateTime: z.string().min(1, 'Delivery Date and Time is required'),
  specialInstructions: z.string().optional(),
};

const validateFieldOnError = (fieldName: keyof FormValues) => {
  if (errors[fieldName]) {
    const result = fieldSchemas[fieldName].safeParse(form[fieldName]);
    console.log(form.countryCode)
    if (!result.success) {
      errors[fieldName] = result.error.errors[0].message;
    } else {
      errors[fieldName] = null; // Clear error if validation is successful
    }
  }
};

const validateField = (fieldName: keyof FormValues) => {
  const result = fieldSchemas[fieldName].safeParse(form[fieldName]);
  if (!result.success) {
    errors[fieldName] = result.error.errors[0].message;
  } else {
    errors[fieldName] = null; // Clear error if validation is successful
  }
};

const hasErrors = () => {
  Object.keys(form).forEach((fieldName) => {
    validateField(fieldName as keyof FormValues);
  });
  return Object.values(errors).some((error) => error !== null);
};

const submitForm = async () => {
  console.log('has error',hasErrors())
  // TODO 
    // try {
    //   isSubmitting.value = true;
    //   // Replace with your actual API call
    //   const response = await fetch('/api/request', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(form),
    //   });
    //   const data = await response.json();
    //   message.value = data.message;
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   resetForm();
    // }
//   }
};

const resetForm = () => {
  form.fullName = '';
  form.email = '';
  form.phone = '';
  form.pickupLocation = '';
  form.dropoffLocation = '';
  form.goodsDescription = '';
  form.weight = 0;
  form.dimensions = '';
  form.pickupDateTime = '';
  form.deliveryDateTime = '';
  form.specialInstructions = '';
  isSubmitting.value = false;
  Object.keys(errors).forEach((key) => {
    errors[key] = false;
  });
  message.value = '';
};

onMounted(() => {
    document.querySelector(".header").style.background = "var(--main-blue)";
});
</script>

<style scoped lang="scss">
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-top: 10rem;
}

.form-container .error label {
  color: red;
}

.form-container input,
.form-container textarea,
.form-container button,
.form-container select {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.form-container input:focus,
.form-container textarea:focus,
.form-container select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.form-container .error input,
.form-container .error textarea,
.form-container .error select {
  border-color: red;
  color: red;
}

.form-container button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  width: auto;
}

.form-container button:disabled {
  background-color: #ccc;
}

.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
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

.phone-container {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  select {
    width: auto;
    flex: 1;
  }

  input {
    flex: 2;
  }
}
</style>
