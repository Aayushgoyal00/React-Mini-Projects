
function Color_name({bg ,setcolor}){
    
    return(
<button className="p-2 m-2 rounded border-black" style={{backgroundColor: bg} } onClick={()=>setcolor(bg)}>
{bg}
</button>
)
}
export default Color_name