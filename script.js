document.getElementById('caloriesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const elevation = parseInt(document.getElementById('elevation').value);
    const paceMinutes = parseInt(document.getElementById('paceMinutes').value);
    const paceSeconds = parseInt(document.getElementById('paceSeconds').value);

    // Convertir ritmo a formato decimal
    const pace = paceMinutes + (paceSeconds / 60);

    let caloriesBurned;

    // Fórmulas de cálculo de calorías (simplificadas)
    if (gender === 'male') {
        caloriesBurned = (0.63 * weight * distance) + (0.42 * elevation) - (0.16 * age) + (0.31 * pace);
    } else {
        caloriesBurned = (0.53 * weight * distance) + (0.33 * elevation) - (0.14 * age) + (0.25 * pace);
    }

    document.getElementById('result').textContent = `Calorías Quemadas: ${Math.round(caloriesBurned)}`;
});
