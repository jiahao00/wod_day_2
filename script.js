

function aa(a)	{
var b = a[0]*a[1]
	
	for (i=1; i<(a.length-1); i++ ){


			if (a[i]*a[(i+1)]>b){
				b=a[(i+1)]*a[i]
			}
		
}
return b
}




document.write(aa([3,6,-2,-5,7,3]))
document.write("<br/>")
document.write(aa([-3,1,-2,6,-8]))
document.write("<br/>")
document.write(aa([-1,1,-2,6,-8]))