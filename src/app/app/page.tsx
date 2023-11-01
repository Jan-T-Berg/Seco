"use client";
import TinderCard from "react-tinder-card";
export default async function Login() {
  const onSwipe = (direction: any) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier: any) => {
    console.log(myIdentifier + " left the screen");
  };
  //  className="GoldGlass mt-10 rounded-lg p-8 max-w-md w-full space-y-4 z-20 shadow-lg"
  // @ts-ignore
  /*
  *  {
                //style={{ backgroundImage: `url(${person.url})` }}
              }*/
  return (
    <>
      <main className="w-full flex items-center justify-center">
        <TinderCard
          className="swipe GoldGlass mt-10 rounded-lg p-8 max-w-md w-full space-y-4 z-20 shadow-lg "
          key="test"
          preventSwipe={["top", "down"]}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        >
          <div className="card">
            <h3>Test</h3>
          </div>
        </TinderCard>
      </main>
    </>
  );
}
