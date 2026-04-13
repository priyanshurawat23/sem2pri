function calsum() {
            let n=document.getElementById("num").value;
            let sum=0;

            for (let i=2; i<=n; i++) {
                if (i%2===0) {
                    sum+=i;
                }
            }

            document.getElementById("result").innerText= 
                "sum of even no is "+sum;
        }