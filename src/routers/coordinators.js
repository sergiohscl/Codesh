export const nextHome = (navigate) => {
    navigate('/')
}

export const gotoPageDetails = (navigate, name) => {
    navigate(`/listPatients/${name}`)
}