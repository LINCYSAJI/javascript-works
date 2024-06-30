txt1="abc"

txt2="pqr"

merged_str=[]
lst_txt1=list(txt1)
lst_txt2=list(txt2)

for i in range(len(txt1)):
    
    merged_str=lst_txt1[i]+lst_txt2[i]
    
    print(merged_str,end="")

