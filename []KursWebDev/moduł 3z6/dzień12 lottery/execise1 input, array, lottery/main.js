const capabilitiesStrong = ['never give up'];
const capabilitiesSoft = ['what i could ask myself constructiv'];
const addBtn = document.querySelector('.add');
const plusStrong = ['Wake Up!', 'Keep going!', 'Make Your life better than yesterday!', ];
const plusSoft = ['Take a deep breath', 'Let go pass', 'Don’t worry, be happie. When You worry, make it dobble'];

const addTo = (e) => {
    e.preventDefault();
    const exclamation = "!";
    const input = document.querySelector('input');
    const inValue = input.value;
    input.value = "";
    if (inValue.length) {
        if (inValue.includes(exclamation)) {
            plusStrong.push(inValue);
            console.log(inValue);
        } else {
            {
                plusSoft.push(inValue);
                console.log(inValue);
            }

        };
    };

    const concatArray = [].concat(capabilitiesStrong, plusSoft, capabilitiesSoft, plusStrong)
    const adviceBtn = document.querySelector('.showAdvice');


    let showOptionToggle = false;
    const optionsBtn = document.querySelector('.showOptions');
    const showOptions = () => {
        alert(concatArray);
        // const div = document.createElement('div');
        // div.style.position = 'fixed';
        // div.style.top = '50%';
        // div.style.left = '50%';
        // div.style.transform = 'translate(-50%, -50%)';
        // div.style.backgroundColor = '#000';
        // div.style.color = '#07f';
        // div.textContent = concatArray;
        // document.body.appendChild(div);
    }
    optionsBtn.addEventListener('click', showOptions);


    const showAdvice = () => {
        for (let i = 0; i < concatArray.length; i++) {
            const index = Math.floor(Math.random() * concatArray.length);
            const h1 = document.querySelector('h1');
            h1.textContent = concatArray[index];
        }
    };

    adviceBtn.addEventListener('click', showAdvice);

};
addBtn.addEventListener('click', addTo);

const reset = document.querySelector('.clean');
const clean = () => {
    for (let i = 0; i < plusStrong; i++) {
        plusStrong[i].delete()
    };
    for (let i = 0; i < plusSoft; i++) {
        plusSoft[i].delete()
    };
    alert('disappear')
};
reset.addEventListener('click', clean);



/* // example sentece list for use to input add
 Wake Up!
Keep going!
Make Your life better than yesterday!

Take a deep breath
Let go pass
Don’t worry, be happie. When You worry, make it dobble
 */