let $Id = document.querySelector('#Id');
let $IdInp = document.querySelector('#Id-Inp');

let $HolderInp = document.querySelector('#Holder-Inp');
let $Holder = document.querySelector('#Holder');

let $CVV2 = document.querySelector('#CVV2');
let $CVV2Inp = document.querySelector('#CVV2-Inp');

let $Pass = document.querySelector('#Pass');
let $PassInp = document.querySelector('#Pass-Inp');

$IdInp.addEventListener('input', (e) => {
    $Id.innerHTML = $IdInp.value;

    if (($IdInp.value).length == 4 ||
        ($IdInp.value).length == 11 ||
        ($IdInp.value).length == 18
    ) {
        $IdInp.value += " - "
    }

    if (($IdInp.value).length == 25) {
        $HolderInp.focus();
    }

    if (($IdInp.value).search(/[1-9]/)) {
        alert('Please Enter Number ')
    }
});

$HolderInp.addEventListener('input', (e) => {
    $Holder.innerHTML = $HolderInp.value;
});

$CVV2Inp.addEventListener('input', (e) => {
    $CVV2.innerHTML = 'CVV2 : ' + $CVV2Inp.value;

    if (($CVV2Inp.value).length == 4) {
        $PassInp.focus();
    }
});

$PassInp.addEventListener('input', (e) => {
    $Pass.innerHTML = 'Expire Date : ' + $PassInp.value;

    if (($PassInp.value).length == 2) {
        $PassInp.value += " / "
    }

    if (($PassInp.value).search(/[1-9]/)) {
        alert('Please Enter Number ')
    }

    if (($PassInp.value).length == 7) {
        $IdInp.focus();
    }
});