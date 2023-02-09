import { createContext, useState } from "react";

export const Context = createContext({
    // Managing Users State
    users: [],
    setUsers: () => {},
    // Loading success or failure
    usersLoading: null,
    setUsersLoading: () => {},
    //pagination
    usersCurrentPage: null,
    setUsersCurrentPage: () => {},
    //user per page
    usersPostsPerPage: null,
    setUsersPostsPerPage: () => {},
    //searchTerm
    userSearchTerm: '',
    setUserSearchTerm: () => {},
    //SelectedNumber
    userSelectedNumber: null,
    setUserSelectedNumber: () => {},
    //Managing Products State
    products: [],
    setProducts: () => {},
    // Loading products
    productsLoading: null,
    setProductsLoading: () => {},
    //products per page
    productsPostsPerPage: null,
    setProductsPostsPerPage: () => {},
    //products current
    productsCurrentPage: null,
    setProductsCurrentPage: () => {},
    //productsSelectedNumber
    productsSelectedNumber: null,
    setProductsSelectedNumber: () => {},
    //products search term
    productsSearchTerm: '',
    setProductsSearchTerm: () => {},
    //specificFilters
    userFilters: null,
    setUserFilters: () => {},
    productFilters: null,
    setProductsFilter: () => {},

    //UserSpecificFilters
    //1 Name
    nameFilter:null,
    setNameFilter: () => {},

    //2 Email
    emailFilter: null,
    setEmailFilter: () => {},

    //3 Birth
    birthFilter: null,
    setBirthFilter: () => {},

    //4 Gender
    genderFilter: null,
    setGenderFilter: () => {},

    //ProductSpecificFilter
    //1 Title
    titleFilter:null,
    setTitleFilter: () => {},

    //2 brand
    brandFilter: null,
    setBrandFilter: () => {},

    //3 category
    categoryFilter:null,
    setCategoryFilter: () => {},

    //4 tabs
    tabFilter: null,
    setTabFilter: () => {},
    
    //Activation global
    globalSearchActive: null,
    setGlobalSearchActive: () => {},

    //Activation User
    nameActive: null,
    setNameActive: () => {},
    emailActive: null,
    setemailActive: () => {},
    birthActive: null,
    setBirthActive: () => {},
    genderActive:null,
    setGenderActive: () => {},

    //Activation Product
    titleActive: null,
    setTitleActive: () => {},
    brandActive: null,
    setBrandActive: () => {},
    categoryActive: null,
    setCategoryActive: () => {},
    tabActive: null,
    setTabActive: () => {},

    //Search activated
    searchActivated: null,
    setSearchActivated: () => {},

    //Show DropDown
    showDropDown:null,
    setShowDropDown: () => {}
})

function ContextProvider({children}) {


    //Search Term
    const [userSearchTerm, setUserSearchTerm] = useState('')
    const [productsSearchTerm, setProductsSearchTerm] = useState('')
    //Users and Products
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    //Loading
    const [usersLoading, setUsersLoading] = useState(false)
    const [productsLoading, setProductsLoading] = useState(false)
    //CurrentPage
    const [usersCurrentPage, setUsersCurrentPage] = useState(1)
    const [productsCurrentPage, setProductsCurrentPage] = useState(1)
    //Posts Per Page
    const [usersPostsPerPage, setUsersPostsPerPage] = useState(5)
    const [productsPostsPerPage, setProductsPostsPerPage] = useState(5)
    //Selected Number
    const [userSelectedNumber, setUserSelectedNumber] = useState(5)
    const [productsSelectedNumber, setProductsSelectedNumber] = useState(5)
    //User and Product Filtering
    const [userFilters,setUserFilters] = useState(false)
    const [productFilters,setProductsFilter] = useState(false)
    //User Filters
    const [nameFilter,setNameFilter] = useState('')
    const [emailFilter,setEmailFilter] = useState('')
    const [birthFilter,setBirthFilter] = useState('')
    const [genderFilter,setGenderFilter] = useState('')
    //Products Filters
    const [titleFilter,setTitleFilter] = useState('')
    const [brandFilter,setBrandFilter] = useState('')
    const [categoryFilter,setCategoryFilter] = useState('')
    const [tabFilter,setTabFilter] = useState('')
    //Activation global
    const [globalSearchActive,setGlobalSearchActive] = useState(false)
    //User Activation
    const [nameActive,setNameActive] = useState(false)
    const [emailActive,setemailActive] = useState(false)
    const [birthActive,setBirthActive] = useState(false)
    const [genderActive,setGenderActive] = useState(false)
    //Product Activation
    const [titleActive,setTitleActive] = useState(false)
    const [brandActive,setBrandActive] = useState(false)
    const [categoryActive,setCategoryActive] = useState(false)
    const [tabActive,setTabActive] = useState(false)
    //Search Activation
    const [searchActivated,setSearchActivated] = useState(false)
    //Show DropDown
    const [showDropDown,setShowDropDown] = useState(true)

    const value = {
        showDropDown:showDropDown,
        setShowDropDown:setShowDropDown,
        searchActivated:searchActivated,
        setSearchActivated:setSearchActivated,
        tabFilter:tabFilter,
        setTabFilter:setTabFilter,
        tabActive:tabActive,
        setTabActive:setTabActive,
        genderFilter:genderFilter,
        setGenderFilter:setGenderFilter,
        genderActive:genderActive,
        setGenderActive:setGenderActive,
        titleFilter:titleFilter,
        setTitleFilter:setTitleFilter,
        brandFilter:brandFilter,
        setBrandFilter:setBrandFilter,
        categoryFilter:categoryFilter,
        setCategoryFilter:setCategoryFilter,
        titleActive:titleActive,
        setTitleActive:setTitleActive,
        brandActive:brandActive,
        setBrandActive:setBrandActive,
        categoryActive:categoryActive,
        setCategoryActive:setCategoryActive,
        globalSearchActive:globalSearchActive,
        setGlobalSearchActive:setGlobalSearchActive,
        nameActive:nameActive,
        setNameActive:setNameActive,
        emailActive:emailActive,
        setemailActive:setemailActive,
        birthActive:birthActive,
        setBirthActive:setBirthActive,
        users: users,
        setUsers: setUsers,
        usersLoading: usersLoading,
        setUsersLoading: setUsersLoading,
        usersCurrentPage: usersCurrentPage,
        setUsersCurrentPage: setUsersCurrentPage,
        usersPostsPerPage: usersPostsPerPage,
        setUsersPostsPerPage:setUsersPostsPerPage,
        userSearchTerm: userSearchTerm,
        setUserSearchTerm: setUserSearchTerm,
        userSelectedNumber: userSelectedNumber,
        setUserSelectedNumber: setUserSelectedNumber,
        products: products,
        setProducts: setProducts,
        productsLoading:productsLoading,
        setProductsLoading:setProductsLoading,
        productsPostsPerPage:productsPostsPerPage,
        setProductsPostsPerPage:setProductsPostsPerPage,
        productsCurrentPage: productsCurrentPage,
        setProductsCurrentPage: setProductsCurrentPage,
        productsSelectedNumber:productsSelectedNumber,
        setProductsSelectedNumber:setProductsSelectedNumber,
        productsSearchTerm:productsSearchTerm,
        setProductsSearchTerm:setProductsSearchTerm,
        userFilters:userFilters,
        setUserFilters:setUserFilters,
        productFilters:productFilters,
        setProductsFilter:setProductsFilter,
        nameFilter:nameFilter,
        setNameFilter:setNameFilter,
        emailFilter:emailFilter,
        setEmailFilter:setEmailFilter,
        birthFilter:birthFilter,
        setBirthFilter:setBirthFilter
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default ContextProvider