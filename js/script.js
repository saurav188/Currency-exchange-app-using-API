let change_from_currency=document.getElementById('change-from-currency');
let change_to_currency=document.getElementById('change-to-currency');
let change_from_value=document.getElementById('change-from-value');
let change_to_value=document.getElementById('change-to-value');

async function useapi(){
    response=await fetch('https://api.exchangeratesapi.io/latest');
    response=await response.json();
    all_currency_and_rates=response.rates;
    all_currency=Object.keys(all_currency_and_rates);
    all_currency.forEach(each=>{
        change_from_currency.innerHTML+='<option value="'+each+'">'+each+'</option>';
        change_to_currency.innerHTML+='<option value="'+each+'">'+each+'</option>';
    });
    document.querySelector('.date-container').innerHTML="Exchange rate of date: "+response.date;
    excahnge_currency(all_currency_and_rates);
};
function excahnge_currency(all_currency_and_rates){
    let change_from_currency=(document.getElementById('change-from-currency').value);
    let change_to_currency=(document.getElementById('change-to-currency').value);
    let change_from_value=document.getElementById('change-from-value').value;
    let change_to_value=document.getElementById('change-to-value');
    let rate_for_change_from_currency=all_currency_and_rates[change_from_currency];
    let rate_for_change_to_currency=all_currency_and_rates[change_to_currency];
    let exchange_multiplier=change_from_value/rate_for_change_from_currency;
    change_to_value.value=(rate_for_change_to_currency*exchange_multiplier).toFixed(2);
    setTimeout(()=>excahnge_currency(all_currency_and_rates),100);
};
useapi();