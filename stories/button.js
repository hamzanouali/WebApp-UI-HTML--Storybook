import './assets/Font-Poppins/font.css'
import './assets/normalization.css'
import './assets/root.css'
import './button.css'

export const createButton = ({
    type = 'primary',
    outline = false,
    icon = false,
    iconPosition = 'left',
    text,
    onClick,
}) => {
    const div = document.createElement('div')

    const btnType = `ui-btn--${type}`
    const outlined = outline ?  `ui-btn--${type}-outline` : ``

    if(!icon) {
        div.innerHTML = `<button class="ui-btn ${btnType} ${outlined}">${text}</button>`
    } else if(icon && iconPosition === 'left') {
        div.innerHTML = `
        <button class="ui-btn ${btnType} ${outlined} ui-btn--icon">
            <span class="ui-btn__icon-container">
                ${icon}
            </span>
            <span class="ui-btn__text">
                ${text}
            </span>
        </button>`
    } else {
        div.innerHTML = `
        <button class="ui-btn ${btnType} ${outlined} ui-btn--icon">
            <span class="ui-btn__text">
                ${text}
            </span>
            <span class="ui-btn__icon-container">
                ${icon}
            </span>
        </button>`
    }

    div.querySelector('button').addEventListener('click', onClick)
    return div.querySelector('button')
}