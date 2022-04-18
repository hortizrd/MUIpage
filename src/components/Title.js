const Title = () => {
  const arr = ["Apple", "Orange","Banana","Aguacate"];
  const obj = [
    {
        name:"Abril",
        numero:4,
        ano:2022
    },
    {
        name:"Mayo",
        numero:5,
        ano:2022
    },
    {
        name:"Junio",
        numero:6,
        ano:2022
    }
  ]
  return (
    <ul>
     { ["Apple", "Orange","Banana","Aguacate"].map((item)=>(
         <li>{item}</li>
         
     ))

     }
    </ul>
  );
};
export default Title;
