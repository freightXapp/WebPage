<script setup>
import { ref, watchEffect } from "vue";

// define component props for the slider component
const { min, max, step, modelValue } = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    default: 50,
  },
});

// define emits for the slider component
const emit = defineEmits(["update:modelValue"]);

// define refs for the slider component
const sliderValue = ref(modelValue);
const slider = ref(null);

// function to get the progress of the slider
const getProgress = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

// function to set the css variable for the progress
const setCSSProgress = (progress) => {
  slider.value.style.setProperty("--ProgressPercent", `${progress}%`);
};

// watchEffect to update the css variable when the slider value changes
watchEffect(() => {
  if (slider.value) {
    // emit the updated value to the parent component
    emit("update:modelValue", sliderValue.value);

    // update the slider progress
    const progress = getProgress(
      sliderValue.value,
      slider.value.min,
      slider.value.max
    );

    // define extrawidth to ensure that the end of progress is always under the slider thumb.
    let extraWidth = (100 - progress) / 10;

    // set the css variable
    setCSSProgress(progress + extraWidth);
  }
});
</script>
<template>
  <div class="custom-slider">
    <input
      ref="slider"
      :value="sliderValue"
      @input="({ target }) => (sliderValue = parseFloat(target.value))"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      class="slider"
    />
    <input
      :value="sliderValue"
      @input="({ target }) => (sliderValue = parseFloat(target.value))"
      :min="min"
      :max="max"
      :step="step"
      type="number"
      class="input"
    />
  </div>
  <main>
	<input type="range" class="win10-thumb" />
</main>
</template>
<style scoped>


/* style the input element with type "range" */


/*
 * 16 February 2022
 * Range Slider Progress in Chrome with pure CSS
 *
 * === This CodePen demonstrates how we can implement range slider "progress fill" in Webkit browsers using a `clip-path` and a `box-shadow` ===
 *
 * === There is an open issue about Standardizing input[type="range"] styling (https://github.com/w3c/csswg-drafts/issues/4410). For all I know, it hasn't been implemented yet ===
 *
 * === This demo is meant for Chrome browsers. But it'll also work in Firefox because Firefox provides the `::-moz-range-progress` pseudo-class ===
 *
 * more info. in the details view
 *
 */

/* === range theme and appearance === */
input[type="range"] {
}

input[type="range"] {
	--thumb-height: 1.125em;
	--track-height: 0.125em;
	--track-color: rgba(0, 0, 0, 0.2);
	--brightness-hover: 180%;
	--brightness-down: 80%;
	--clip-edges: 0.125em;
}
	input[type="range"].win10-thumb {
		color: purple;
	}


	input[type="range"] {
		--track-color: rgba(255, 255, 255, 0.1);
	}



/* === range commons === */


/* === WebKit specific styles === */
input[type="range"],
input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none;
	transition: all ease 100ms;
	height: var(--thumb-height);
}

input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
	position: relative;
}

input[type="range"]::-webkit-slider-thumb {
	--thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
	--clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
	--clip-bottom: calc(var(--thumb-height) - var(--clip-top));
	--clip-further: calc(100% + 1px);
	--box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
		100vmax currentColor;

	width: var(--thumb-width, var(--thumb-height));
	background: linear-gradient(currentColor 0 0) scroll no-repeat left center /
		50% calc(var(--track-height) + 1px);
	background-color: currentColor;
	box-shadow: var(--box-fill);
	border-radius: var(--thumb-width, var(--thumb-height));

	filter: brightness(100%);
	clip-path: polygon(
		100% -1px,
		var(--clip-edges) -1px,
		0 var(--clip-top),
		-100vmax var(--clip-top),
		-100vmax var(--clip-bottom),
		0 var(--clip-bottom),
		var(--clip-edges) 100%,
		var(--clip-further) var(--clip-further)
	);
}

input[type="range"]:hover::-webkit-slider-thumb {
	filter: brightness(var(--brightness-hover));
	cursor: grab;
}

input[type="range"]:active::-webkit-slider-thumb {
	filter: brightness(var(--brightness-down));
	cursor: grabbing;
}

input[type="range"]::-webkit-slider-runnable-track {
	background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
		100% calc(var(--track-height) + 1px);
}

input[type="range"]:disabled::-webkit-slider-thumb {
	cursor: not-allowed;
}

/* === Firefox specific styles === */
input[type="range"],
input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-thumb {
	appearance: none;
	transition: all ease 100ms;
	height: var(--thumb-height);
}

input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-thumb,
input[type="range"]::-moz-range-progress {
	background: #fff0;
}

input[type="range"]::-moz-range-thumb {
	background: currentColor;
	border: 0;
	width: var(--thumb-width, var(--thumb-height));
	border-radius: var(--thumb-width, var(--thumb-height));
	cursor: grab;
}

input[type="range"]:active::-moz-range-thumb {
	cursor: grabbing;
}

input[type="range"]::-moz-range-track {
	width: 100%;
	background: var(--track-color);
}

input[type="range"]::-moz-range-progress {
	appearance: none;
	background: currentColor;
	transition-delay: 30ms;
}

input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-progress {
	height: calc(var(--track-height) + 1px);
	border-radius: var(--track-height);
}

input[type="range"]::-moz-range-thumb,
input[type="range"]::-moz-range-progress {
	filter: brightness(100%);
}

input[type="range"]:hover::-moz-range-thumb,
input[type="range"]:hover::-moz-range-progress {
	filter: brightness(var(--brightness-hover));
}

input[type="range"]:active::-moz-range-thumb,
input[type="range"]:active::-moz-range-progress {
	filter: brightness(var(--brightness-down));
}

input[type="range"]:disabled::-moz-range-thumb {
	cursor: not-allowed;
}


</style>