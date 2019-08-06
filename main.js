const firstData = document.createElement('div');
const name = document.createElement('input');
const sureName = document.createElement('input');
const bntFir = document.createElement('button');

const body = document.querySelector('body');

firstData.append(name);
firstData.append(sureName);
firstData.append(bntFir);

body.append(firstData);

bntFir.textContent = 'next form';
name.placeholder = 'name';
sureName.placeholder = 'surname';

const arrData = [];

bntFir.onclick = () => {
    arrData.push(name.value, sureName.value);
    firstData.remove();

    setTimeout(() => {
        const secondData = document.createElement('div');
        const age = document.createElement('input');
        const email = document.createElement('input');
        const bntSec = document.createElement('button');

        secondData.append(age);
        secondData.append(email);
        secondData.append(bntSec);

        body.append(secondData);

        bntSec.textContent = 'next form';
        age.placeholder = 'age';
        email.placeholder = 'email';

        bntSec.onclick = () => {
            arrData.push(age.value, email.value);
            secondData.remove();

            setTimeout(() => {
                const thirdData = document.createElement('div');
                const adress = document.createElement('input');
                const phone = document.createElement('input');
                const bntThd = document.createElement('button');

                thirdData.append(adress);
                thirdData.append(phone);
                thirdData.append(bntThd);

                body.append(thirdData);

                bntThd.textContent = 'check your entered data';
                adress.placeholder = 'adress';
                phone.placeholder = 'telephone';

                bntThd.id = "thirdButton";

                bntThd.onclick = () => {
                    arrData.push(adress.value, phone.value);
                    thirdData.remove();

                    setTimeout(() => {
                        const infoText = document.createElement('h1');

                        body.append(infoText);

                        infoText.textContent = 'Your subject and descriptions here:'


                        for (let data of arrData) {

                            const p = document.createElement('p');

                            p.append(data);
                            body.append(p);
                        }

                        const divSend = document.createElement('div');
                        const sendData = document.createElement('button');

                        divSend.append(sendData);
                        body.append(divSend);

                        divSend.id = 'divSend';
                        sendData.textContent = 'send your data'

                        sendData.onclick = () => {
                            body.remove();
                            alert('Your data sent successfully! Thanks')
                        }
                    }, 200);
                }
            }, 200);
        }
    }, 200);
}