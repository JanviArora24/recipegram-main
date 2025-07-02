const RecipeCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-lg shadow mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="font-semibold">👩‍🍳 @chef_janvi</div>
        <button className="text-blue-500 hover:underline text-sm">
          Follow
        </button>
      </div>

      <img
        src="https://th.bing.com/th/id/OSK.2f5a6334771086df255f46d04257967e?w=216&h=324&rs=2&qlt=80&o=6&cdv=1&cb=ircwebp2&pid=16.1"
        alt="recipe"
        className="rounded mb-2 w-40 h-40"
      />

      <h3 className="text-lg font-bold mb-1">Chocolate Cake</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        Ingredients: Cocoa, Milk, Sugar, Flour
      </p>

      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>❤️ 10</span>
        <span>💬 3</span>
        <span>🔖 Save</span>
        <span>⬇ Download</span>
      </div>
    </div>
  );
};

export default RecipeCard;
