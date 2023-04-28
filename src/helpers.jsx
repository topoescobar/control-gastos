export const revisarPresupuesto = (presupuesto, resto) => {
    let clase

    if (resto < (presupuesto/4)) {
        clase = 'alert alert-danger'
    } else if ( resto < (presupuesto/2)) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert-succes'
    }

    return clase
}