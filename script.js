const quote=document.getElementById("quote");
        const author=document.getElementById("author");
        const url="https://dummyjson.com/quotes";
        let count=0;
        async function getQuote(url){
            
            
            const response=await fetch(url);
            var data=await response.json();
            console.log(data);
            quote.innerHTML=data.quotes[count].quote;
            author.innerHTML=data.quotes[count].author;
            count++;
            if(count >= data.quotes.length){
            count = 0; // reset after last quote
            }

        }
        
        getQuote(url);

        function tweet(){
            window.open("https://twitter.com/intent/tweet?text=Hello%20world","Tweet Window","width=600px","height=450px");

        }
        document.getElementById("btn1").addEventListener("click", () => {getQuote(url);});