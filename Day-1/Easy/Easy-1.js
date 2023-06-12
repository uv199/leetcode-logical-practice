`
link = https://leetcode.com/problems/longest-common-prefix/description/
`



let abc = ["domga","mcarga","domcarga","domccarga"]


const fun=(a)=> {
        let size = a.length;
        if (size == 0) "";
        if (size == 1) a[0];
        a.sort();
        let minLength = Math.min(a[0].length, a[size-1].length);
        let i = 0;
        while (i < minLength && a[0][i] == a[size-1][i] )
            i++;
            console.log(' a[0]: ',  a[0].substring(0, i));
            console.log('i: ', i);
        let pre = a[0].substring(0, i);
        return pre;
    }

   console.log(fun(abc)) 

   // take help accept in leet code