const wait = async ( ms ) =>
    new Promise( ( resolve ) => setTimeout( resolve, ms ) );

export default wait;