import useLoadHouse from "../../Hooks/useLoadHouse";
import Banner from "./Banner";
import Card from "./Card";


const Home = () => {
    let [houseCollection] = useLoadHouse();
    console.log(houseCollection);
    return (
        <div>
            <Banner></Banner>
            <div className="text-center text-6xl  my-10">
                All Cards Are Here
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    houseCollection?.map(item=><Card
                    key={item._id}
                    item={item}></Card>)
                }
            </div>

        </div>
    )
}
export default Home;