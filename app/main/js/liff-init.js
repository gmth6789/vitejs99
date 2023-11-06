// ----- Configuration Zone! -----
// Don't forget to change this to your LIFF ID

const liffId = "2001474621-Zodw5bVX";

// Don't forget to change this to your LIFF ID

liff.init(
  { liffId: liffId },
  () => {
    initLIFF();
  },
  err => {
    window.alert(err);
  }
);
function initLIFF() {
  if (liff.isLoggedIn()) {
    liff
      .getProfile()
      .then(profile => {
        document.getElementById("profileImage").src = profile.pictureUrl;
        document.getElementById("userId") = profile.userId;
        document.getElementById("displayName") = profile.displayName;
        document.getElementById("statusMessage") =
          profile.statusMessage;
        document.getElementById("pictureUrl").href = profile.pictureUrl;
        document.getElementById("pictureUrl") = profile.pictureUrl;
        document.getElementById(
          "email"
        ).innerHTML = liff.getDecodedIDToken().email;
      })
      .catch(e => {
        document.getElementById("userId") = "No data, " + e;
        document.getElementById("displayName") = "No data, " + e;
        document.getElementById("statusMessage") = "No data, " + e;
        document.getElementById("pictureUrl") = "No data, " + e;
        document.getElementById("email") = "No data, " + e;
      });
  } else {
    document.getElementById("userId") = "No data, Login first";
    document.getElementById("displayName") = "No data, Login first";
    document.getElementById("statusMessage") = "No data, Login first";
    document.getElementById("pictureUrl") = "No data, Login first";
    document.getElementById("email")= "No data, Login first";
  }

  document.getElementById("getOS")= liff.getOS();
  document.getElementById("getLanguage") = liff.getLanguage();
  document.getElementById("getVersion") = liff.getVersion();
  document.getElementById("isInClient") = liff.isInClient();
  document.getElementById("isLoggedIn") = liff.isLoggedIn();
  var context = liff.getContext();
  if (context !== null) {
    document.getElementById("context_type") = context.type;
    document.getElementById("context_viewType") = context.viewType;
    document.getElementById("context_userId") = context.userId;
    if (context.utouId) {
      document.getElementById("context_utouId")= context.utouId;
    } else {
      document.getElementById("context_utouId") =
        "You are not in the utou";
    }
    if (context.roomId) {
      document.getElementById("context_roomId") = context.roomId;
    } else {
      document.getElementById("context_roomId") =
        "You are not in the room";
    }
    if (context.groupId) {
      document.getElementById("context_groupId") = context.groupId;
    } else {
      document.getElementById("context_groupId") =
        "You are not in the group ";
    }
  } else {
    document.getElementById("context_type") = "No data.";
    document.getElementById("context_viewType") = "No data.";
    document.getElementById("context_userId") = "No data.";
    document.getElementById("context_utouId") = "No data.";
    document.getElementById("context_roomId") = "No data.";
    document.getElementById("context_groupId") = "No data.";
  }
}