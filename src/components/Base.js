import { Component } from "react";
import Screen from './Screen.js'
import CalculatorButton from './CalculatorButton.js'



class Base extends Component {
  state = {
    executionValue: ''
  }

  onClickEqual = () => {
    let dividedExecutionArray = this.state.executionValue;
    dividedExecutionArray = dividedExecutionArray.split(' ');
    let firstValue = parseFloat(dividedExecutionArray[0]);
    let operation = dividedExecutionArray[1];
    let secondValue = parseFloat(dividedExecutionArray[2]);


    switch (operation) {
      case '+':
        this.setState({executionValue : firstValue + secondValue});
        break;
      case '-':
        this.setState({executionValue : firstValue - secondValue});
        break;
      case '*':
        this.setState({executionValue : firstValue * secondValue});
        break;
      case '/':
        this.setState({executionValue : firstValue / secondValue});
        break;
    }
  }

  onClickSum = () => {
    this.setState(state => ({ executionValue: state.executionValue + ' + ' }))
  }

  onClickRest = () => {
    this.setState(state => ({ executionValue: state.executionValue + ' - ' }))
  }

  onClickMult = () => {
    this.setState(state => ({ executionValue: state.executionValue + ' * ' }))
  }

  onClickDiv = () => {
    this.setState(state => ({ executionValue: state.executionValue + ' / ' }))
  }

  onClick1 = () => {
    this.setState(state => ({ executionValue: state.executionValue + '1' }))
  }

  onClick2 = () => {
    this.setState(state => ({ executionValue: state.executionValue + '2' }))
  }

  onClick3 = () => {
    this.setState(state => ({ executionValue: state.executionValue + '3' }))
  }

  onClick4 = () => {
    this.setState(state => ({ executionValue: state.executionValue + '4' }))
  }

  onClick5 = () => {
    this.setState(state => ({ executionValue: state.executionValue + '5' }))
  }

  onClick6 = () => {
    this.setState(state => ({ executionValue: state.executionValue + '6' }))
  }

  onClick7 = () => {
    this.setState(state => ({ executionValue: state.executionValue + '7' }))
  }

  onClick8 = () => {
    this.setState(state => ({ executionValue: state.executionValue + '8' }))
  }

  onClick9 = () => {
    this.setState(state => ({ executionValue: state.executionValue + '9' }))
  }

  onClick0 = () => {
    this.setState(state => ({ executionValue: state.executionValue + '0' }))
  }

  onClickPoint = () => {
    this.setState(state => ({ executionValue: state.executionValue + '.' }))
  }

  onClickCe = () => {
    this.setState({
      executionValue: ''
    })

  }

  render() {
    return (
      <div style={styles.CalculatorContainer} >
        <div style={styles.CalculatorBox}>
          <Screen value={this.state.executionValue} />
          <div style={styles.ButtonContainer}>
            <div>
              <CalculatorButton label={'1'} execute={this.onClick1} />
              <CalculatorButton label={'2'} execute={this.onClick2} />
              <CalculatorButton label={'3'} execute={this.onClick3} />
              <CalculatorButton label={'4'} execute={this.onClick4} />
              <CalculatorButton label={'5'} execute={this.onClick5} />
              <CalculatorButton label={'6'} execute={this.onClick6} />
              <CalculatorButton label={'7'} execute={this.onClick7} />
              <CalculatorButton label={'8'} execute={this.onClick8} />
              <CalculatorButton label={'9'} execute={this.onClick9} />
              <CalculatorButton label={'0'} execute={this.onClick0} />
              <CalculatorButton label={'.'} execute={this.onClickPoint} />
            </div>
            <div>
              <CalculatorButton label={'CE'} execute=
                {this.onClickCe} size={'big'} />
              <CalculatorButton label={'+'} execute=
                {this.onClickSum} />
              <CalculatorButton label={'/'} execute=
                {this.onClickDiv} />
              <CalculatorButton label={'X'} execute=
                {this.onClickMult} />
              <CalculatorButton label={'-'} execute=
                {this.onClickRest} />
              <CalculatorButton label={'='} execute=
                {this.onClickEqual} size={'big'} />
            </div>
          </div>





        </div>
      </div>
    )
  }
}

const styles = {
  ButtonContainer: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
  },
  NumberContainer: {

  },
  OperationContainer: {

  },
  CalculatorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  CalculatorBox: {
    width: '50%',
    height: '75%',
    marginTop: '15%',
    border: 'black solid 3px',
    padding: '1rem',
    borderRadius: '16px',
    background: 'pink',
  }

}

export default Base