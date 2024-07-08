<template>
  <div class="form-container">
    <h1>Transport Request Form</h1>
    <form @submit.prevent="submitForm">
      <!-- Full Name Field -->
      <div :class="{ error: errors.fullName }">
        <label for="fullName">{{ errors.fullName ? errors.fullName : 'Full Name:' }}</label>
        <input
          id="fullName"
          v-model="form.fullName"
          type="text"
          placeholder="Enter your full name"
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
          placeholder="Enter your email address"
          @blur="validateField('email')"
          @input="validateFieldOnError('email')"
        >
      </div>

      <!-- Phone Field -->
      <div :class="{ error: errors.phone }">
        <label for="phone">{{ errors.phone ? errors.phone : 'Phone Number:' }}</label>
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

      <!-- Pickup Location Field -->
      <div :class="{ error: errors.pickupLocation }">
        <label for="pickupLocation">{{ errors.pickupLocation ? errors.pickupLocation : 'Pickup Location:' }}</label>
        <input
          id="pickupLocation"
          v-model="form.pickupLocation"
          type="text"
          placeholder="Enter the pickup location"
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
          placeholder="Enter the dropoff location"
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
          placeholder="Describe the goods to be transported"
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
          placeholder="Enter the weight of the goods"
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
          placeholder="Enter the dimensions of the goods"
          @blur="validateField('dimensions')"
          @input="validateFieldOnError('dimensions')"
        >
      </div>

      <!-- Pickup Date Field -->
      <div :class="{ error: errors.pickupDateTime }">
        <label for="pickupDateTime">{{ errors.pickupDateTime ? errors.pickupDateTime : 'Pickup Date:' }}</label>
        <input
          id="pickupDateTime"
          v-model="form.pickupDateTime"
          type="text"
          :min="today"
          :max="maxDate"
          placeholder="dd.mm.yyyy"
          @focus="(e) => { e.target.type = 'date'; form.pickupDateTime = form.pickupDateTime ? form.pickupDateTime : today; e.target.focus() }"
          @blur="validateField('pickupDateTime')"
          @input="validateFieldOnError('pickupDateTime')"
        >
      </div>

      <!-- Delivery Date Field -->
      <div :class="{ error: errors.deliveryDateTime }">
        <label for="deliveryDateTime">{{ errors.deliveryDateTime ? errors.deliveryDateTime : 'Delivery Date:' }}</label>
        <input
          id="deliveryDateTime"
          v-model="form.deliveryDateTime"
          type="text"
          :min="today"
          :max="maxDate"
          placeholder="dd.mm.yyyy"
           @focus="(e) => { e.target.type = 'date';  form.deliveryDateTime = form.deliveryDateTime ? form.deliveryDateTime : today; e.target.focus()}"
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
          placeholder="Enter any special instructions"
          @blur="validateField('specialInstructions')"
          @input="validateFieldOnError('specialInstructions')"
        />
      </div>

      <!-- Verification Code Field (Initially Hidden) -->
      <div v-if="verificationStep">
        <label for="verificationCode">Verification Code:</label>
        <input
          id="verificationCode"
          v-model="verificationCode"
          type="text"
          placeholder="Enter the verification code"
        >
        <button :disabled="isSubmitting" @click="verifyCode">Verify Code</button>
      </div>

      <button v-else :disabled="isSubmitting" type="submit">
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
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;
const verificationStep = ref(false);
const verificationId = ref<string | undefined>('');
const verificationCode = ref<string | undefined>('');

type ResponseData = {
    message: string;
    requestId?: string;
    errors?: Record<string, string>;
};

type FormValues = {
  fullName: string;
  email: string;
  phone: string; 
  countryCode: string;
  pickupLocation: string;
  dropoffLocation: string;
  goodsDescription: string;
  weight: number | null;
  dimensions: string;
  pickupDateTime: string;
  deliveryDateTime: string;
  specialInstructions: string;
};

// Initialize today's date
const today = new Date().toISOString().split('T')[0];
const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0];


const form: FormValues = reactive({
  fullName: '',
  email: '',
  phone: '',
  countryCode: '',
  pickupLocation: '',
  dropoffLocation: '',
  goodsDescription: '',
  weight: null,
  dimensions: '',
  pickupDateTime: '',
  deliveryDateTime: '',
  specialInstructions: '',
});

const message = ref<string | undefined>('');
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
    .min(1, 'Pickup Date is required')
    .refine((date) => {
      const pickupDate = new Date(date);
      const today = new Date();
      return pickupDate.toDateString() === today.toDateString() || pickupDate >= today;
    }, 'Pickup Date cannot be in the past'),
  deliveryDateTime: z.string()
    .min(1, 'Delivery Date is required')
    .refine((date) => {
      const deliveryDate = new Date(date);
      const pickupDate = new Date(form.pickupDateTime);
      return deliveryDate.toDateString() === pickupDate.toDateString() || deliveryDate > pickupDate;
    }, 'Delivery Date must be after Pickup Date'),
  specialInstructions: z.string().optional(),
};

const validateFieldOnError = (fieldName: keyof FormValues) => {
  if (errors[fieldName]) {
    const result = fieldSchemas[fieldName].safeParse(form[fieldName]);
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

    if (hasErrors()) {
        const errorFields = Object.keys(errors).filter((key) => errors[key]);
        if (errorFields.length > 0) {
            const firstErrorField = errorFields[0];
            const firstErrorElement = document.getElementById(firstErrorField);
            if (firstErrorElement) {
                firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstErrorElement.focus();
            }
        }
        return;
    }
  try {
        isSubmitting.value = true;
        const { data, refresh } = await useFetch<ResponseData>(`${baseUrl}/trs`, {
            method: 'POST',
            body: JSON.stringify(form),
            onResponse({ response }) {
                return response;
            }
        });
        if(data){
            if (data.value?.errors && Object.keys(data.value.errors).length ) {
                console.log(data.value.errors)
                    // Update errors in the form
                    Object.keys(data.value.errors).forEach(key => {
                        errors[key] = data.value.errors[key];
                    });
                    const firstErrorField = Object.keys(data.value.errors)[0];
                    const firstErrorElement = document.getElementById(firstErrorField);
                    if (firstErrorElement) {
                        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        firstErrorElement.focus();
                    }
            } else {
                message.value = data.value?.message;
                verificationId.value = data.value?.requestId;
                verificationStep.value = true;
            }
        }else{
            await refresh()
        }
    } catch (error) {
        console.error(error);
        message.value = 'An error occurred';
    } finally {
        isSubmitting.value = false;
    }
};

const verifyCode = async () => {
    try {
        isSubmitting.value = true;
       const { data, error, status } = await useFetch(`${baseUrl}/trs/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ requestId: verificationId.value, verificationCode: verificationCode.value}),
        });

        if (status.value !== 'success') {
            message.value = data.value?.message || 'Verification failed';
        } else {
            message.value = data.value?.message;
            resetForm();
        }
    } catch (error) {
        console.error(error);
        message.value = 'An error occurred';
    } finally {
        isSubmitting.value = false;
    }
};

    
const resetForm = () => {
  form.fullName = '';
  form.email = '';
  form.phone = '';
  form.pickupLocation = '';
  form.dropoffLocation = '';
  form.goodsDescription = '';
  form.weight = null;
  form.dimensions = '';
  form.pickupDateTime = today;
  form.deliveryDateTime = today;
  form.specialInstructions = '';
  isSubmitting.value = false;
  Object.keys(errors).forEach((key) => {
    errors[key] = false;
  });
  message.value = '';
  verificationStep.value = false;
};

onMounted(() => {
  document.querySelector(".header").style.background = "var(--main-blue)";
});
</script>

<style scoped lang="scss">
.form-container {
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  margin-top: 10rem;

  h1{
        text-align: center;
    font-size: 2.7rem;
    margin-bottom: 3rem;
    font-weight: 500;
  }
}

.form-container .error label {
  color: red;
}

.form-container label
// .form-container textarea,
// .form-container button,
// .form-container select 
{
    font-size: 1.2rem;
    color: var(--text-grey);
 
}

.form-container input,
.form-container textarea,
.form-container button,
.form-container select {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 0.1rem solid var(--border);
  border-radius: $border-default;
     &::placeholder{
    font-size: 1.6rem;
    color: var(--text-grey);
    font-weight: 300;


    }
}

.form-container input:focus,
.form-container input:hover,
.form-container textarea:focus,
.form-container textarea:hover,
.form-container select:hover,
.form-container select:focus {
  outline: none;
  border-color: var(--main-blue);
  box-shadow: 0 0 5px rgba(2, 85, 174, 0.5);
  transition: all 0.3s;
}

.form-container .error input,
.form-container .error textarea,
.form-container .error select {
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
  width: 16px;
  height: 16px;
  border: 2px solid var(--text-grey);
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
