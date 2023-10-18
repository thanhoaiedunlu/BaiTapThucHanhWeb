const a = prompt('Nhập a: ');
const b = prompt('Nhập b: ');
const c = prompt('Nhập c: ');
if (a == 0){

}
else{
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta == 0){
        const x = -b / 2 * a;
        document.writeln('Phương trình có nghiệm kép: ');
    }else if(delta < 0){
        document.writeln('Phương trình vô nghiệm');
    }else  {
        document.writeln('Phương trình có 2 nghiệm phân biệt');
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 =  (-b - Math.sqrt(delta)) / (2 * a);

        document.writeln('Nghiệm x1: ' + x1 );
        document.writeln('Nghiệm x2: ' + x2 );
    }

}