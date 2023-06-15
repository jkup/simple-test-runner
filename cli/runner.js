// Required modules
import fs from "fs";
import glob from "glob";

// Read the JSON config file
const configFilePath = "config.json"; // Replace with your config file path
fs.readFile(configFilePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading config file: ${err}`);
    return;
  }

  try {
    const config = JSON.parse(data);
    const { testPattern, testFolder } = config;

    // Perform glob matching on the testFolder using the testPattern
    const globPattern = `${testFolder}/**/${testPattern}`;
    glob(globPattern, (err, files) => {
      if (err) {
        console.error(`Error globbing test files: ${err}`);
        return;
      }

      // Log the matching files
      console.log("Matching test files:");
      files.forEach((file) => console.log(file));
    });
  } catch (error) {
    console.error(`Error parsing config file: ${error}`);
  }
});
