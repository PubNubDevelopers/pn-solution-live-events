export async function getAuthKey(
    userId: string,
    isGuidedDemo: boolean
  ): Promise<{ accessManagerToken: string | undefined }> {
    try {
      const TOKEN_SERVER =
        `https://devrel-demos-access-manager.netlify.app/.netlify/functions/api/pillar-live-events${isGuidedDemo ? '-guided' : ''}`;
      //const TOKEN_SERVER =
      //  `http://localhost:8083/.netlify/functions/api/pillar-live-events${isGuidedDemo ? '-guided' : ''}`;
      const response = await fetch(`${TOKEN_SERVER}/grant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ UUID: userId }),
      });
  
      const data = await response.json();
      if (data.statusCode !== 200) {
        console.log(data.message);
      } else {
        const token = data.body.token;
        return {
          accessManagerToken: token,
        };
      }
    } catch (error: any) {
      console.log(
        "Failed to obtain the Access Manager token for demo:" + error.message
      );
    }
  
    return {
      accessManagerToken: undefined,
    };
  }
  