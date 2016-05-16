$(document).ready(function()
{
	$("#contact").validate(
	{
		// rules dictate what is (in)valid
		rules:
		{
			firstName:
                        {
                            required: true,
                            pattern: /^[a-zA-Z\'\-\s]+$/
                        },
      lastName:
                        {
                            pattern: /^[a-zA-Z\'\-\s]+$/
                        },

      email:
                  			{
                  			    required: true,
                  			    email: true
                  			},

      message:
                        {
                            required: true
                        }
		},

		// messages are what are displayed to the user
		messages:
		{
			firstName:
                        {
                            required: " Please enter a name",
                            pattern: " Please use only letters, spaces, hypens and apostrophes"
                        },
      lastName: " Please use only letters, spaces, hypens and apostrophes",

      email: " Please enter a valid email address",

      message: " Please enter a message"

		}
	});
});
