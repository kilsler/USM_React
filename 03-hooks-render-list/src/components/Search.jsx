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
            <input
                className="form-control me-2"
                type="text"
                onChange={handleSearchChange}
                placeholder="Поиск..." />
        </div>
    );
}

export default Search;
