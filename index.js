

// html to javascipt

const situation = document.getElementById("situation");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");
const restartBtn = document.getElementById("restratBtn");
const game = document.getElementById("game");
const gameStartWindow = document.getElementById("gameStart");
btn1.style.display = "none";
btn2.style.display = "none";
btn3.style.display = "none";
btn4.style.display = "none";
const startBtn = document.getElementById("startBtn");
const winButton = document.getElementById("winBtn");


let status = 0;



// the function of the game

function functionGame(){
    gameStartWindow.style.display = "none";
    btn1.style.display = "inline";
    btn2.style.display = "inline";
    btn3.style.display = "inline";
    btn4.style.display = "inline";
    restartBtn.style.display = "none";
    game.style.display = "block";



    situation.style.color = "black";
    situation.innerHTML = "אתה גברת לואזל וגילית שהשרשרת שמרת פורסטייה<br>.הביאה לך הייתה מזויפת<br>?מה תעשה עכשיו"
    btn1.innerHTML = "תלך לחנות הנשקים הקרובה"
    btn2.innerHTML = "לך הביתה ותשכח מכל מה שקרה"
    btn3.innerHTML = "תלך הביתה ותתכנן נקמה"
    btn4.innerHTML = "תקרא לעבד האפריקאי שלך שיחטוף את<br>מרת פורסטייה";
    
    
    btn1.onclick = function(){   
          
        situation.innerHTML = "הגעת אל חנות הנשקים הקרובה.<br>אתה רואה שם בחור גדול ושחור שהוא גם הבעל של מרת פורסטייה<br>?מה תעשה"
        btn1.innerHTML = "תברח מהחנות"
        btn2.innerHTML = "תגנוב סכין ותדקור את בעל החנות"
        btn3.innerHTML = "תקנה ממנו אקדח"
        btn4.style.display = "none";

        btn1.onclick = function(){
            situation.style.color = "red";
            situation.innerHTML = "ברחת מהחנות כמו פחדן<br>.ובסופו של דבר לא הצלחת להחזיר את הכסף<br>.הפסדת"
            btn1.style.display = "none"
            btn2.style.display = "none"
            btn3.style.display = "none"
            btn4.style.display = "none";
            restartBtn.style.display = "inline";
    
        }
        btn2.onclick = function(){
            situation.style.color = "red";
            situation.innerHTML = ",גנבת סכין ודקרת את הבעל של מרת פורסטייה<br>.אז אתה בכלא עכשיו וקיבלת קנס של המון כסף<br>.הפסדת"
            btn1.style.display = "none"
            btn2.style.display = "none"
            btn3.style.display = "none"
            btn4.style.display = "none";
            restartBtn.style.display = "inline";
        }
        btn3.onclick = function(){
            situation.innerHTML = ".קנית אקדח מהבעל של מרת פורסטייה<br>...אז אתה צריך להשתמש בו<br>?במי מהם אתה תירה"
            btn1.innerHTML = "מרת פורסטייה"
            btn2.innerHTML = "הבעל של מרת פורסטייה"
            btn3.style.display = "none"
            btn4.style.display = "none";
        
            btn1.onclick = function(){
                situation.style.color = "red";
                situation.innerHTML = ".אתה יוצא מהחנות ויורה במרת פורסטייה<br>בעקבות המעשה הזה אתה קיבלת עונש מאסר עולם<br>.ולא הצלחת להחזיר את הכסף<br>.הפסדת"
                btn1.style.display = "none"
                btn2.style.display = "none"
                btn3.style.display = "none"
                btn4.style.display = "none";
                restartBtn.style.display = "inline";
                
            }

            btn2.onclick = function(){
                situation.style.color = "red";
                situation.innerHTML = ".אתה מסתכל בעיניים של הבעל של מרת פורסטייה וללא רחמים אתה יורה בו<br>בעקבות המעשה הזה אתה קיבלת עונש מאסר עולם<br>.ולא הצלחת להחזיר את הכסף<br>.הפסדת"
                btn1.style.display = "none"
                btn2.style.display = "none"
                btn3.style.display = "none"
                btn4.style.display = "none"
                restartBtn.style.display = "inline";
           
            }
        
        
        }
    }
    
    
//----------------
    
    btn2.onclick = function(){
        situation.style.color = "red";
        situation.innerHTML = ".אתה הולך לבית, שוכח מהכל וממשיך עם החיים<br>.אבל לא השגת את הכסף שלך בחזרה ממרת פורסטייה<br>.מה שאומר שהפסדת"
        btn1.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "none"
        btn4.style.display = "none"
        restartBtn.style.display = "inline";
    }

    
    
    btn3.onclick = function(){
        situation.innerHTML = "הלכת לבית, פגשת את מר לואזל והתחלתם<br>.לתכנן ביחד את הנקמה במרת פורסטיה<br>.לפתע, מר לואזל אומר שהנקמה לא לעניין ושהוא רוצה לוותר עליה<br>?האם תסכימו למר לואזל"
        btn1.innerHTML = "כן"
        btn2.innerHTML = "לא"
        btn3.style.display = "none"
        btn4.style.display = "none"
    
        btn1.onclick = function(){ב
            situation.style.color = "red";
            situation.innerHTML = "החלטת להסכים למר לואזל מה שאומר שאתה<br>.לא תנקום במרת פורסטייה ולא תחזיר את הכסף<br>.הפסדת"
            btn1.style.display = "none"
            btn2.style.display = "none"
            btn3.style.display = "none"
            btn4.style.display = "none"
            restartBtn.style.display = "inline";
        }

        btn2.onclick = function(){
            situation.innerHTML = ".לא הסכמת למר לואזל והחלטתם בסופו של דבר לנקום במרת פורסטייה<br>**לאחר כמה ימים**<br>הגעתם אל יום החטיפה אבל עליכם לבחור נשק על מנת<br>.לאיים על מרת פורסטייה<br>:בחרו"
            btn1.innerHTML = "AK-47"
            btn2.innerHTML = "גורילה"
            btn3.innerHTML = "M-16"
            btn4.style.display = "none"
        
            btn1.onclick = function(){
                situation.innerHTML = ".הגעתם אל ביתה של מרת פורסטייה עם AK-47<br>נכנסתם אל ביתה של מרת פורסטייה ואתם מאיימים עליה עם הנשק.<br>היא בוכה ומבקשת רחמים.<br>האם תלכו ולא תעשו לה כלום או תמשיכו במשימה?"
                btn1.innerHTML = "תרחמו עליה ותלכו"
                btn2.innerHTML = "תמשיכו במשימה 😈"
                btn3.style.display = "none"
                btn4.style.display = "none"
            
                btn1.onclick = function(){
                    situation.style.color = "red";
                    situation.innerHTML = "הלכתם לבית משום מה<br>.מה שאומר שלא החזרתם את הכסף<br>.הפסדתם"
                    btn1.style.display = "none"
                    btn2.style.display = "none"
                    btn3.style.display = "none"
                    btn4.style.display = "none"
                    restartBtn.style.display = "inline";
            }
            
            btn2.onclick = function(){
                situation.innerHTML = ".אתם ממשיכים במשימה<br>גנבתם את כל הדברים שהיו בביתה של מרת פורסטייה<br>.וכמו שאתם יודעים, היא עשירה אז גנבתם המון דברים בעלי ערך<br>:ועכשיו, נשארה לכם את ההחלטה האחרונה והגורלית ביותר"
                btn1.innerHTML = "לירות במרת פורסטייה ולא לקחת את הכסף"
                btn2.innerHTML = "לקחת את הכסף ולתת למרת פורסטייה לחיות"
                btn3.style.display = "none"
                btn4.style.display = "none"
            
                btn1.onclick = function(){
                    situation.style.color = "red";
                    situation.innerHTML = "אמנם יריתם במרת פורסטייה<br>,וזה היה מאוד כיף<br>אבל נכנסתם לכלא ולא השגתם את הכסף בחזרה<br>.ממרת פורסטייה<br>.הפסדתם"
                    btn1.style.display = "none"
                    btn2.style.display = "none"
                    btn3.style.display = "none"
                    btn3.style.display = "none"
                    restartBtn.style.display = "inline";

                }


                btn2.onclick = function(){
                    situation.style.color = "green";
                    situation.style.fontSize = "55px";
                    situation.innerHTML = "!כל הכבוד<br>!ניצחתם את המשחק הזה ועל כך מגיע לכם פרס<br>על מנת לקבל את הפרס<br>:אנא לחצו על הכפתור הניצחון"
                    btn1.style.display = "none"
                    btn2.style.display = "none"
                    btn3.style.display = "none"
                    btn3.style.display = "none"
                    winButton.style.display = "inline";
                    
                }
            }
        
        
        }

            btn2.onclick = function(){
                situation.innerHTML = ".הגעתם אל ביתה של מרת פורסטייה עם גורילה<br>.מרת פורסטייה פחדה וברחה מהבית<br>?מה תעשו"
                btn1.innerHTML = "תרחמו עליה ותלכו חזרה לבית"
                btn2.innerHTML = "תגנבו הכל 😈"
                btn3.style.display = "none"
                btn4.style.display = "none"
                
                btn1.onclick = function(){
                    situation.style.color = "red";
                    situation.innerHTML = "הלכתם לבית משום מה<br>.מה שאומר שלא החזרתם את הכסף<br>.הפסדתם"
                    btn1.style.display = "none"
                    btn2.style.display = "none"
                    btn3.style.display = "none"
                    btn4.style.display = "none"
                    restartBtn.style.display = "inline";
            }


                btn2.onclick = function(){
                    situation.style.color = "green";
                    situation.style.fontSize = "55px";
                    situation.innerHTML = "!כל הכבוד<br>החזרתם את כל הכסף ממרת פורסטייה<br>!ועל כך מגיע לכם פרס<br>על מנת לקבל את הפרס<br>:אנא לחצו על הכפתור הניצחון"
                    btn1.style.display = "none"
                    btn2.style.display = "none"
                    btn3.style.display = "none"
                    btn3.style.display = "none"
                    winButton.style.display = "inline";
                }
       
        }
        }




    
    }
    
    
            btn4.onclick = function(){
                situation.style.color = "red";
                situation.innerHTML = "קראת לעבד האפריקאי שלך<br>לצערך הרב הוא נעצר בגלל צבע עורו<br>.ולא חטף את מרת פורסטייה<br>.הפסדת"
                btn1.style.display = "none"
                btn2.style.display = "none"
                btn3.style.display = "none"
                btn4.style.display = "none"
                restartBtn.style.display = "inline";

            }
    
    
}



restartBtn.addEventListener("click", functionGame);

startBtn.addEventListener("click", functionGame);