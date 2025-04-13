/**
 * 
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
            <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            </div>
            <input 
            type="search" 
            id="default-search" 
            class="block w-full p-4 ps-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500 focus:border-gray-500" placeholder="Search Mockups, Logos..." 
            onChange={handleSearchChange}
            />
        </div>
        </div>
    );
}

export default Search;
