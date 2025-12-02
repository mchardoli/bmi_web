function calculateBMI() {
    // Get values from input fields
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultDiv = document.getElementById("result");

    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = "<p style='color:red;'>Please enter valid positive numbers.</p>";
        return false; // Prevent form submission
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Decide category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Show result
    resultDiv.innerHTML = `<h3>Your BMI is: ${bmi}</h3><p>${category}</p>`;
    return false; // Prevent page reload
}
