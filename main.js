// const TypeWriter = function(txtElement, words, wait = 3000){
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// // Type method
// TypeWriter.prototype.type = function(){
//     // current index of word
//     const current = this.wordIndex % this.words.length;
//     // get full text of current word
//     const fullTxt = this.words[current];
    

//     // Check if it's in the deleting state
//     if(this.isDeleting){
//         // Remove character
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else{
//         // Add character
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     // Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Initial Typesepeed
//     let typeSpeed = 300;

//     if(this.isDeleting){
//         typeSpeed /= 2;
//     }
//     // check to see if the word is complete
//     if(!this.isDeleting && this.txt == fullTxt){
//         typeSpeed = this.wait; /*will make a pause at end */
//         // set delete to true
//         this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === ''){
//         this.isDeleting = false;
//         // Move to the next word
//         this.wordIndex ++;
//         // pause before typing
//         typeSpeed = 500;
//     }


//     setTimeout(() => this.type(), typeSpeed);
    
// }

// // Initialize on DOM load
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init(){
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     // Init typewriter
//     new TypeWriter(txtElement, words, wait);
// }




// ES6 Class
class TypeWriter{
    constructor(txtElement, words, wait = 1000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type(){
        // current index of word
        const current = this.wordIndex % this.words.length;
        // get full text of current word
        const fullTxt = this.words[current];
        

        // Check if it's in the deleting state
        if(this.isDeleting){
            // Remove character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else{
            // Add character
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Typesepeed
        let typeSpeed = 200;

        if(this.isDeleting){
            typeSpeed /= 2;
        }
        // check to see if the word is complete
        if(!this.isDeleting && this.txt == fullTxt){
            typeSpeed = this.wait; /*will make a pause at end */
            // set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            // Move to the next word
            this.wordIndex ++;
            // pause before typing
            typeSpeed = 600;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init typewriter
    new TypeWriter(txtElement, words, wait);
}