document.addEventListener("DOMContentLoaded", (e)=>{
    console.log("No this isn't for you")

    let equal_model = document.getElementsByClassName('equal_model_textbox')
    let equal_model_btn = document.getElementById('equal_model_btn')
    let equal_model_label = document.getElementsByClassName('equal_model_label')
    equal_model_btn.addEventListener('click', (e)=>{
        func_equal_model(equal_model,equal_model_label);
    })

    let equal_model_tc = document.getElementsByClassName("equal_model_tc_textbox")
    let equal_model_tc_btn = document.getElementById("equal_model_tc_btn")
    let equal_model_tc_label = document.getElementsByClassName("equal_model_tc_label")
    let equal_model_tc_textbox_eff = document.getElementsByClassName("equal_model_tc_textbox_eff")
    equal_model_tc_btn.addEventListener('click', (e)=>{
        func_equal_model_tc(equal_model_tc, equal_model_tc_label, equal_model_tc_textbox_eff)
    })

    let parallel_model = document.getElementsByClassName('parallel_model_textbox')
    let parallel_model_btn = document.getElementById("parallel_model_btn")
    let parallel_model_label = document.getElementsByClassName("parallel_model")
    let parallel_model_eff = document.getElementsByClassName("parallel_model_textbox_eff")
    parallel_model_btn.addEventListener('click', ()=>{
        func_parallel_model(parallel_model, parallel_model_label, parallel_model_eff)
    })
});
let func_equal_model = (equal_model, equal_model_label)=>{

    if(Array.from(equal_model).some((x) => !x.value))
        texts_def(equal_model_label)
    if (!equal_model[0].value && equal_model[1].value && equal_model[2].value)
    {
       
        let n = parseFloat(equal_model[1].value)
        let ts = parseFloat(equal_model[2].value)
        equal_model_label[0].classList.add('answer')
        equal_model[0].value = ts/parseFloat(ts/n)
    }
    else if (equal_model[0].value && !equal_model[1].value && equal_model[2].value)
    {
        let sn = parseFloat(equal_model[0].value)
        let ts = parseFloat(equal_model[2].value)
        equal_model_label[1].classList.add('answer')
        equal_model[1].value = parseFloat(sn)
    }
}

let func_equal_model_tc = (equal_model_tc, equal_model_tc_label,a )=>{
    if(Array.from(equal_model_tc).some((x) => !x.value))
        texts_def(equal_model_tc_label)
    if (!equal_model_tc[0].value && equal_model_tc[1].value && equal_model_tc[2].value && equal_model_tc[3].value)
    {
        let n = parseFloat(equal_model_tc[1].value)
        let ts = parseFloat(equal_model_tc[2].value)
        let tc = parseFloat(equal_model_tc[3].value)
        equal_model_tc_label[0].classList.add('answer')
        equal_model_tc[0].value = n/parseFloat(1+n*(tc/ts))
    }
    else if (equal_model_tc[0].value && !equal_model_tc[1].value && equal_model_tc[2].value && equal_model_tc[3].value)
    {
        let sn = parseFloat(equal_model_tc[0].value)
        let ts = parseFloat(equal_model_tc[2].value)
        let tc = parseFloat(equal_model_tc[3].value)
        equal_model_tc_label[1].classList.add('answer')
        equal_model_tc[1].value = Math.round((sn*ts)/parseFloat(ts-sn*tc))
    }
    else if (equal_model_tc[0].value && equal_model_tc[1].value && !equal_model_tc[2].value && equal_model_tc[3].value)
    {
        let sn = parseFloat(equal_model_tc[0].value)
        let n = parseFloat(equal_model_tc[1].value)
        let tc = parseFloat(equal_model_tc[3].value)
        equal_model_tc_label[2].classList.add('answer')
        equal_model_tc[2].value = (sn*n*tc)/(n-sn)
    }
    else if (equal_model_tc[0].value && equal_model_tc[1].value && equal_model_tc[2].value && !equal_model_tc[3].value)
    {
        let sn = parseFloat(equal_model_tc[0].value)
        let n = parseFloat(equal_model_tc[1].value)
        let ts = parseFloat(equal_model_tc[2].value)
        equal_model_tc_label[3].classList.add('answer')
        equal_model_tc[3].value = ((n*ts)-(sn*ts))/parseFloat(sn*n)
    }

    if(Array.from(equal_model_tc).every((x) => x.value))
        computeEff_equal_model_tc(equal_model_tc, a)
    
}
let = func_parallel_model=(parallel_model, parallel_model_label, a) =>{
    if(Array.from(parallel_model).some((x) => !x.value))
        texts_def(parallel_model_label)
    
    if (!parallel_model[0].value && parallel_model[1].value && parallel_model[2].value && parallel_model[3].value)
    {
        let n = parseFloat(parallel_model[1].value)
        let ts = parseFloat(parallel_model[2].value)
        let f = parseFloat(parallel_model[3].value)
        parallel_model_label[0].classList.add('answer')
        parallel_model[0].value = n/parseFloat((1+(n-1)*f))
    }
    else if (parallel_model[0].value && !parallel_model[1].value && parallel_model[2].value && parallel_model[3].value)
    {
        let sn = parseFloat(parallel_model[0].value)
        let ts = parseFloat(parallel_model[2].value)
        let f = parseFloat(parallel_model[3].value)
        parallel_model_label[1].classList.add('answer')
        parallel_model[1].value = Math.round((sn-f*sn)/parseFloat((1-f*sn)))
    }
    else if (parallel_model[0].value && parallel_model[1].value && parallel_model[2].value && !parallel_model[3].value)
    {
        let sn = parseFloat(parallel_model[0].value)
        let n = parseFloat(parallel_model[1].value)
        let ts = parseFloat(parallel_model[2].value)
        parallel_model_label[3].classList.add('answer')
        parallel_model[3].value = (n-sn)/parseFloat((sn*n)-sn)
    }
    if(Array.from(parallel_model).every((x) => x.value))
        computeEff_parallel_model(parallel_model, a)
}
let computeEff_equal_model_tc = (x, a)=>{
    let sn = parseFloat(x[0].value)
    let n = parseFloat(x[1].value)
    let ts = parseFloat(x[2].value)
    let tc = parseFloat(x[2].value)
    a[0].value = 1/parseFloat((1+n*(tc/ts)))
}
let computeEff_parallel_model = (x, a)=>{
    let sn = parseFloat(x[0].value)
    let n = parseFloat(x[1].value)
    let ts = parseFloat(x[2].value)
    let tc = parseFloat(x[2].value)
    let f = parseFloat(x[3].value)
    a[0].value = 1/parseFloat((1+(n-1)*f))
}


let texts_def = (x)=>{
    for (let c of x)
        if (c.classList.contains('answer'))
            c.classList.remove('answer')
}