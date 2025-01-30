const textBtn = {
    name: 'Click this',
    paragraph: 'When you click the link above it will display my learning outcome for my array Implementtion in the console'
}

const textBtnTwo = {
    name: 'show Array',
    paragraph: 'You can see the listed array here in frontend'
}

export default function MyButton() {
    return (
        <div>
           <button id="btn">{textBtn.name}</button>
            <p>{textBtn.paragraph}</p>

            <button id="show">{textBtnTwo.name} </button>
            <p>{textBtnTwo.paragraph}</p>

            <p id="front"></p> 
        </div>
    )
}