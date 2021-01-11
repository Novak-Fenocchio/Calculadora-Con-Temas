import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
let op = '';
let number_2_text = '';
let cuentaArray = [];
let resultadoCuenta = '';
function plus()
{
  op = document.getElementById('+').value;
} 

function minus()
{
  op = document.getElementById('-').value;
} 
function by()
{
  op = document.getElementById('*').value;
} 
function dividided()
{
  op = document.getElementById('/').value;
} 


class Calculator extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      colorState: 'Yellow',
      result1: 0,
      count: '0',
      show: false,
      theme: 'predeterminado',
      themeDelete: 'predeterminadoDelete',
      themeResult: 'predeterminadoResult'
    }}
    calculate = () =>
    {
      if(cuentaArray[cuentaArray.length - 1] != '+' !='-' !='*' !='/'){
        console.log('a')

        resultadoCuenta = eval(cuentaArray.join(''));
        console.log('calculate1 if' + cuentaArray);
        console.log('calculate2 if' + resultadoCuenta);

        console.log('calculate3 if' + cuentaArray[cuentaArray.length - 1]);
        this.setState({result1: resultadoCuenta});

      }else
      {            console.log('b')

        console.log(cuentaArray);
        console.log(resultadoCuenta);
        console.log('es un ´+')
        console.log(cuentaArray[cuentaArray.length - 1]);
        resultadoCuenta = eval(cuentaArray.join(''));
        console.log(cuentaArray);
        console.log(resultadoCuenta);
        this.setState({result1: resultadoCuenta});
      }

    }
   
    number = (test4) =>
    {
      cuentaArray.push(test4);
      console.log(cuentaArray);    

      if(test4 == '+')
      {
        this.setState({count: cuentaArray.join('')}); 
      }else if(test4 == '-')
      {
        this.setState({count: cuentaArray.join('')}); 
      }
      else if(test4 == '*')
      {
        this.setState({count: cuentaArray.join('')}); 
      }
      else if(test4 == '/')
      {
        this.setState({count: cuentaArray.join('')}); 
      }else if(test4 =='/100*')
      {
        this.setState({count: cuentaArray.join('')}); 

      }
      else if(test4 =='**')
      {
        this.setState({count: cuentaArray.join('')}); 
      }
      else
      {    
        this.setState({count: cuentaArray.join('')}); 
         resultadoCuenta = eval(cuentaArray.join(''));
        console.log(resultadoCuenta);
        this.setState({result1: resultadoCuenta}); 
      }
    }
    delete = () =>
    {

        if(cuentaArray[cuentaArray.length - 1] != '+' != '-' !='*' != '/'){
          console.log('c')
          console.log('delete antes de borrar ' + cuentaArray);
          console.log('delete antes de borrar' + cuentaArray[cuentaArray.length - 1]);          
          cuentaArray.pop();
          console.log('delete despues de borrar' + cuentaArray[cuentaArray.length - 1]);

          if (cuentaArray[cuentaArray.length - 1] == '+') {
            console.log('d')
            cuentaArray.pop();
            resultadoCuenta = eval(cuentaArray.join(''));
            this.setState({result1: resultadoCuenta});
            this.setState({count: cuentaArray});
          }else if (cuentaArray[cuentaArray.length - 1] == '-') {
            console.log('-')
            cuentaArray.pop();
            resultadoCuenta = eval(cuentaArray.join(''));
            this.setState({result1: resultadoCuenta});
            this.setState({count: cuentaArray});
          }if (cuentaArray[cuentaArray.length - 1] == '*') {
            console.log('*')
            cuentaArray.pop();
            resultadoCuenta = eval(cuentaArray.join(''));
            this.setState({result1: resultadoCuenta});
            this.setState({count: cuentaArray});
          }
          if (cuentaArray[cuentaArray.length - 1] == '/') {
            console.log('/')
            cuentaArray.pop();
            resultadoCuenta = eval(cuentaArray.join(''));
            this.setState({result1: resultadoCuenta});
            this.setState({count: cuentaArray});
          }else
          {
            console.log('e');
            console.log(cuentaArray[cuentaArray.length - 1]);
            resultadoCuenta = eval(cuentaArray.join(''));
            this.setState({result1: resultadoCuenta});
            this.setState({count: cuentaArray});
          }
          console.log('delete despues de borrar ' + cuentaArray);
  
        }else
        {          
          console.log('f')
          console.log('delete else ' + cuentaArray);
          cuentaArray.pop();
        }
    }
    CE = () =>
    {
      cuentaArray.length=0;
      this.setState({result1: '0'}); 
      this.setState({count: '0'}); 

    }

    searchColor = () =>
  {
    let number_1_text = document.getElementById('number1').value;
     number_2_text = document.getElementById('number2').value;
  
    let test = '';

    if (op != '') {
      test =number_1_text + op + number_2_text;
    }

    if (number_2_text != '0') {
      let test1 = eval(test);    
        this.setState({result1: test1});
    }else
    {
      let test1 = eval(test);    
        this.setState({result1: test1});
    }
  } 
  delHeader = () => {
    console.log('a'); 
    this.setState({show: true});
  }
  SelectorTheme = () =>
  {
    console.log('b'); 
    this.setState({show: true});
  }
  ChangeTheme = (themeSelected) =>
  {
    this.setState({theme: themeSelected});

    switch(themeSelected)
    {
      case 'darkness':
        {
          this.setState({themeDelete: 'darknessDelete'});
          this.setState({themeResult: 'darknessResult'});
        }
      break;
      case 'predeterminado':
        {
          this.setState({themeDelete: 'predeterminadoDelete'});
          this.setState({themeResult: 'predeterminadoResult'});
        }
      break;
      case 'brightness':
        {
          this.setState({themeDelete: 'brightnessDelete'});
          this.setState({themeResult: 'brightnessResult'});
        }
      break;
    };

    this.setState({show: false});
  }
  render()
  {
    let myheader;
    let mystyle = '';
    let theme = this.state.theme;
    if (this.state.show == true) {
      mystyle = 'block';
    }else{
      mystyle = 'none';
    };

    return(
      <div>
       <main>
         {myheader}
        <div className='section_titulo'>
          <h1>Calculadora</h1>
        </div>

        <section className={this.state.themeResult}>
          <h1>{this.state.result1}</h1>
          <h4>{this.state.count}</h4>
        </section>
        <section className='section_operationsSpecials'>
         
          <button className={theme} value='/100*' onClick={()=> this.number('/100*')}>%</button>
          <button className={theme} value='**' onClick={()=> this.number('**')}>^</button>
          <button className={theme} value='' onClick={()=> this.SelectorTheme('')}><i class="fas fa-palette"></i> </button>
          <input type='button' value='DEL' className={this.state.themeDelete} onClick={()=> this.delete('')}></input>

       <div className='ThemeSelector' style={{display:mystyle}}>
        <h3>Seleccionar un tema</h3>
        <span onClick={()=> this.ChangeTheme('predeterminado')}><i className="fas fa-circle green"></i>Predeterminado</span>
        <span onClick={()=> this.ChangeTheme('brightness')}><i className="fas fa-circle lightBlue"></i>Claro</span> 
        <span onClick={()=> this.ChangeTheme('darkness')}><i className="fas fa-circle {theme}" ></i>Oscuro</span> 
      </div>
     
        </section>
       <section className='calculator'>



          <div className='numbers'>
            <button value='0' className='number' onClick={()=> this.number('0')}>0</button>
            <button value='1' className='number' onClick={()=> this.number('1')}>1</button>
            <button value='2' className='number' onClick={()=> this.number('2')}>2</button>
            <button value='3' className='number' onClick={()=> this.number('3')}>3</button>
            <button value='4' className='number' onClick={()=> this.number('4')}>4</button>
            <button value='5' className='number' onClick={()=> this.number('5')}>5</button>
            <button value='6' className='number' onClick={()=> this.number('6')}>6</button>
            <button value='7' className='number' onClick={()=> this.number('7')}>7</button>
            <button value='8' className='number' onClick={()=> this.number('8')}>8</button>
            <button value='' className='number' onClick={()=> this.CE('')}>CE</button>
            <button value='9' className='number' onClick={()=> this.number('9')}>9</button>
            <button value='.' className='number comma' onClick={()=> this.number('.')}>,</button>
         </div>
          <div className='operations'>

            <button className={theme} onClick={() => this.number("+")}>+</button>
            <button className={theme} onClick={() => this.number('-')}>-</button>
            <button className={theme} onClick={() => this.number('*')}>x</button>
            <button className={theme} onClick={() => this.number('/')}>/</button>
          
          </div>

        </section>  

       </main>
        
      </div>
    );
    }
}

/* class Themes extends React.Component
{ 

  componentWillUnmount() {
    console.log('b');

    alert("The component named Header is about to be unmounted.");
  }
  render()
  {
    return(
      
    )
  }
} */

/* if(2 + 2 == 4)
{
  ReactDOM.render(<Themes/>, document.getElementById('ThemeSelector'));
} */

ReactDOM.render(<Calculator color='red'/>, document.getElementById('root')); 