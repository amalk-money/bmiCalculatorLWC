import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    bmiValue = ''
    bmiResult = ''

    inputHandler(event){
        const{name, value} = event.target;
        if(name === "height"){
            this.height = value;
            }
        if(name === "weight"){
            this.weight = value;
            }
        }

    submitHandler(event){
        event.preventDefault();
        this.calculate();
    }

    calculate(){
        let height = Number(this.height)/100; //converting to meters
        let weight = Number(this.weight);
        let bmi = weight/(height*height);
        
        this.bmiValue = Number(bmi.toFixed(2)); //round-off to 2 decimal place

        if(this.bmiValue < 18.5){
            this.bmiResult = 'Underweght';
        }
        else if (this.bmiValue >= 18.5 && this.bmiValue <25){
            this.bmiResult = 'Healthy';
        }
        else if (this.bmiValue >=25 && this.bmiValue <30){
            this.bmiResult = 'Overweght';
        }
        else{
            this.bmiResult = 'Obese';
        }
    }

    recalculate(){
        this.height = ''
        this.weight = ''
        this.bmiValue = ''
        this.bmiResult = ''
    }

}