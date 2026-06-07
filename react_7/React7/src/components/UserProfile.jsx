function UserProfile({name,email,bio,website,isPremium=false,followerCount})
{
   function isUserPremium()
   {
   
    if(isPremium == false)
    {
        return <>
        <p>Free User</p>
        </>
    }
    else{
        return <>
        <p>Premium Badge</p>
        </>
    }
   }
 
    return (
        <>
        {isUserPremium()}
        <h2>Nazywam się {name}</h2>
        <p>Kontakt mailowy: {email}</p>
        {followerCount >= 999 ? <p>999+ obserwujących</p> : <p>{followerCount} obserwujących</p>}
        {bio && (<p>Moje bio: {bio}</p>)}
        {website && (<p>Moja strona internetowa : {website}</p>)}
        </>
    )
}
export default UserProfile
 