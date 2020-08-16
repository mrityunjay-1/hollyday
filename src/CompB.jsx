import React, {useState, useContext } from 'react';
import { Context1 } from './CompA';
import CssLoader from './CssLoader';
import './index.css';



let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, recent_commision = 0;


const CompBpartTwo = (props) => {
    
    function function1(...my_array){
        let data1 = document.getElementById(my_array[1]).value;
        let data2 = document.getElementById(my_array[2]).value;
        let storer ;
        
        //console.log(my_array[4]);
    
        switch(my_array[4]){
            case 'a':
                a = (data1 - data2) * my_array[0];
                storer = a;
                break;
            case 'b':
                b = (data1 - data2) * my_array[0];
                storer = b;
                break;
            case 'c':
                c = (data1 - data2) * my_array[0];
                storer = c;
                break;
            case 'd':
                d = (data1 - data2) * my_array[0];
                storer = d;
                break;
            case 'e':
                e = (data1 - data2) * my_array[0];
                storer = e;
                break;
            case 'f':
                f = (data1 - data2) * my_array[0];
                storer = f;
                break;
            case 'g':
                g = (data1 - data2) * my_array[0];
                storer = g;
                break;
            case 'h':
                h = (data1 - data2) * my_array[0];
                storer = h;
                break;
            case 'i':
                i = (data1 - data2) * my_array[0];
                storer = i;
                break;
            case 'j':
                j = (data1 - data2) * my_array[0];
                storer = j;
                break;
            case 'k':
                k = (data1 - data2) * my_array[0];
                storer = k;
                break;
            case 'l':
                l = (data1 - data2) * my_array[0];
                storer = l;
                break;
        } 
    
    
        let data = new Intl.NumberFormat("en-IN").format(storer);
        document.getElementById(my_array[3]).value= data;

        
    }
    
    
    return (
        <>
            <div className="CompBdivs" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', border : '1px solid grey'}}> 
                <div style={{width: '20%'}}> <h3> {props.item_name} </h3> <p style={{color: 'red'}}> Rs. <b> {props.price}</b> </p> </div>
                <div style={{width: '20%'}}> <input type="number" min="0" max="1000" id={props.total_item} onInput={() => { function1 (props.price,  props.total_item, props.total_return, props.total_amount, props.datatype) }} /> </div>
                <div style={{width: '20%'}}> <input type="number" min="0" max="1000 " onInput={() => { function1 (props.price,  props.total_item, props.total_return, props.total_amount, props.datatype) }}  id={props.total_return} /> </div>
                
                <div style={{width: '5%'}} align="center"> = </div>
                <div style={{width: '25%'}}> <input type="text" id={props.total_amount} readOnly /> </div>
            </div>
            <br />
        </>
    );
}







const CompB = () => {
        let [total_sum, set_total_sum] = useState(0);
        let [commision, set_commision] = useState(0.00);
        let [final_amount = 0, set_final_amount] = useState(0.00);
    
        function function2(){
            let total_sum1  = a + b + c + d + e + f + g + h + i + j + k + l;
            set_total_sum(total_sum1);
    
            let com = window.prompt("Enter commision: ", recent_commision);
            recent_commision = com;
            
            let commision1 = total_sum1 * (com / 100);
            set_commision(commision1.toFixed(2));

            let final_amount1 = total_sum1 - commision1;
            set_final_amount(final_amount1.toFixed(2));      
    
        }
    
        function reset_data(){
            a = 0; b = 0; c = 0; d = 0; e = 0; f = 0; g = 0; h = 0; i = 0; j = 0; k = 0; l = 0;
            let x = document.getElementsByTagName("input");
            let data123 = Object.values(x);
            //console.log(data123);
    
            data123.forEach((data) => {
                //console.log(data.id);
                document.getElementById(data.id).value = "";
            })
        }
        
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', padding: '1%'}}>
                <CompBpartTwo item_name="Feast Chocobar" price="10" total_item="total_item1" total_return="total_return1" total_amount="total_amount1" datatype="a"/>
                <CompBpartTwo item_name="Mini Chocobar" price="7" total_item="total_item2" total_return="total_return2" total_amount="total_amount2" datatype="b" />
                <CompBpartTwo item_name="Cruchy Chocobar" price="15" total_item="total_item3" total_return="total_return3" total_amount="total_amount3" datatype="c" />
                <CompBpartTwo item_name="Cone" price="25" total_item="total_item4" total_return="total_return4" total_amount="total_amount4" datatype="d" />
                <CompBpartTwo item_name="matka" price="20" total_item="total_item5" total_return="total_return5" total_amount="total_amount5" datatype="e" />
                <CompBpartTwo item_name="Cup Rs. 5" price="5" total_item="total_item6" total_return="total_return6" total_amount="total_amount6" datatype="f" />
                <CompBpartTwo item_name="Cup Rs. 10" price="10" total_item="total_item7" total_return="total_return7" total_amount="total_amount7" datatype="g" />
                <CompBpartTwo item_name="Orange/Litchi" price="5" total_item="total_item8" total_return="total_return8" total_amount="total_amount8" datatype="h" />
                <CompBpartTwo item_name="Mango Dute" price="12" total_item="total_item9" total_return="total_return9" total_amount="total_amount9" datatype="i" />
                <CompBpartTwo item_name="1-2-3" price="15" total_item="total_item10" total_return="total_return10" total_amount="total_amount10" datatype="j" />
                <CompBpartTwo item_name="Kulfi" price="20" total_item="total_item11" total_return="total_return11" total_amount="total_amount11" datatype="k" />
                <CompBpartTwo item_name="Bricks" price="100" total_item="total_item12" total_return="total_return12" total_amount="total_amount12" datatype="l" />
                
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={reset_data} style={{flex: '1', border: '1px solid grey', padding: '1%', outline: 'none'}}> reset </button>
                <button onClick={function2} style={{flex: '1', border: '1px solid grey', padding: '1%', outline: 'none'}}> calculate </button>
            </div> 
            <div align="center">
                <h2 style={{color: 'green'}}> Total Amount: {total_sum} </h2>
                <h2 style={{color: 'grey'}}> Total Commision: {commision} </h2>
                <h2 style={{color: 'red'}}> Final Amount: {final_amount} </h2>
            </div>
        </>
    );
}

export default CompB;
