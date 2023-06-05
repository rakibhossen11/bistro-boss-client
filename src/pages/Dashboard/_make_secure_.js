/**
 * ----------------------------
 *      BASIC
 * -----------------------------
 * 1. DO not show the link to them who should not see it 
 *      only show to the person/type of user who should see it
 * 2. DO not allow to typing visit on the url
 *    use admin route that will check wheather the user is admin or not 
 *    if not admin then redirect to any other page.you could logout user and send them
 *      login page us well.
 * ----------------------------------
 *      TO SEND DATA
 * ----------------------------------
 * 1. verify JWT token (send authorization token in the header to the server)
 *  if posible use axios to send jwt token by intercepting the request 
 * 2. if it is an admin activity. Make sure only active user is posting data by
 *  using verifyAdmin   
 * */  