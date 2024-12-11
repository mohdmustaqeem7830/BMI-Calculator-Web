const form = document.querySelector('form')
const again = document.querySelector('.again')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results  = document.querySelector('#results');
    const body = document.querySelector('body');
    const guideDiv = document.querySelector('.guideDiv');
    const resultText = document.querySelector('.resultText');

    if(height === '' || height<0 || isNaN(height)){

        results.innerHTML = `Please give a valid height ${height}`;

    }
    else if(weight === '' || weight<0 || isNaN(weight)){

        results.innerHTML = `Please give a valid weight ${weight}`;
    }else{

        // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters ** 2);
    results.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    guideDiv.style.display = 'none';
    resultText.style.display = 'block';
    body.style.backgroundImage='none'
    form.style.display ='none'
    again.style.display = 'block'

    const screenWidth = window.innerWidth;

    
    




        if(bmi<18.6){

            body.style.backgroundColor = "blue"
            resultText.innerHTML = "Browser window width: " + screenWidth + "px";


        }
        else if(bmi>18.6 && bmi <24.9){
            body.style.backgroundColor = "Green"
            resultText.innerHTML = "Great job! Your BMI falls within the normal range, meaning you're maintaining a healthy weight. Keep it up with a balanced lifestyle!";
        }
        else if(bmi>= 24.9 && bmi < 29.9){
            body.style.backgroundColor = "yellow"
            resultText.innerHTML ="Your BMI indicates you’re overweight. A balanced diet and regular exercise can help you get back to a healthier weight and feel more energized.";
        }
        else{
             body.style.backgroundColor = "red"
             resultText.innerHTML = "Your BMI shows obesity, which can increase health risks. It's time to take steps toward a healthier lifestyle with the support of professionals for lasting change.";
        }

        
    }

again.addEventListener('click',function(e){
    location.reload();
})


 


})