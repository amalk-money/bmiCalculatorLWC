# BMI Calculator using LWC
## Overview
This project is a BMI Calculator built using Salesforce Lightning Web Components (LWC). It allows users to input their weight and height, then calculates and displays their Body Mass Index (BMI) along with a corresponding classification (Underweight, Healthy, Overweight, Obese) based on the calculated BMI value.

## Features
* **User Input:** Allows users to enter their weight and height.
* **BMI Calculation:** Calculates BMI using the formula:
BMI = weight (kg) / (height (m) * height (m))
* **BMI Classification:** Displays the BMI classification (Underweight, Healthy, Overweight, Obese).
* **Responsive UI:** Optimized for a seamless user experience in Salesforce Lightning environments.
* **LWC (Lightning Web Components):** Utilizes Salesforce LWC framework for modern UI development.

## Usage
1. Enter Height: Input your height in meters.
2. Enter Weight: Input your weight in kilograms.
3. Click "Calculate": Click the "Calculate" button to compute your BMI.
4. View Result: The result will display your BMI value along with a classification (Underweight, Healthy, Overweight, Obese).
5. Click "Re-Calculate": Click the "Re-Calculate" button to re-compute your BMI with new values.

**BMI Classification:**
The following BMI classifications are used in this calculator:

| BMI Range  | Classification |
| ------------- | ------------- |
| Under 18.5  | Underweight  |
| 18.5 - 24.9  | Healthy  |
| 25 - 29.9  | Overweight  |
| 30 and above  | Obese  |
	
## Code Structure
The project is organized as follows:

* force-app/main/default/lwc/bmiCalculator/: Contains the BMI Calculator Lightning Web Component.
* bmiCalculator.html: The template file with the UI structure.
* bmiCalculator.js: The JavaScript file that handles the BMI calculation logic.
* bmiCalculator.css: The CSS file that handles design and layout of the component.
* bmiCalculator.js-meta.xml: The metadata configuration file for the component.
