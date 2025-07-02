import RecipeCard from "../components/RecipeCard";

const Home = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <h2 className="text-2xl font-semibold mb-2">Latest Recipes Feed</h2>

      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
};

export default Home;
