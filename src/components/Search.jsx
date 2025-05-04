/**
 * @component
 * @description Компонент для поиска пиццы по названию.
 * @param {function} onSearch - функция для обработки изменения значения поискаи фильтрации массива пицц.
 * @returns {JSX.Element}
 */
function Search({ onSearch }) {
    const handleSearchChange = (event) => {
        const searchValue = event.target.value.toLowerCase();
        onSearch(searchValue);
    };

    return (
        <div className="container bg-body-secondary  mx-auto p-5 row">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500 focus:border-gray-500" placeholder="Search Mockups, Logos..."
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
}

export default Search;
