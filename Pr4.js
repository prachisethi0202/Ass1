function num(Maths,Physics,Chemistry,English,Hindi)
{
    let result=Maths+Physics+Chemistry+English+Hindi;
    console.log(result);
    if(result>90)
    {
    console.log("Grade A")
    }
    if(result>70 && result<90)
    {
        console.log("Grade B")
    }
    if(result>50 && result<70)
    {
        console.log("Grade c");
    }
    if(result<50)
    {
        console.log("Fail");
    }
}
num(30,40,27,31,11)
num(10,6,7,9,12)
num(40,32,34,30,21)
num(8,10,15,20,10)
num(20,10,20,10,20)