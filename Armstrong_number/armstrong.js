function arm_strong(num)
{
var arm=0,a,temp=num;
while(temp>0)
{
    a=temp%10;
    temp=parseInt(temp/10); // convert float into Integer
    arm=arm+a**3;
}
if(arm==num)
    return "Armstrong number";
else
    return "Not Armstrong number";
}
var n=prompt("enter the number");
var result=arm_strong(n);
document.write("<center><br><br>" +n+ " is "+result+"<br><br></center>");