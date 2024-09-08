#!/bin/bash

# Prompt for project name
echo -n "Enter your folder name: "
read folderName
echo -n "Enter your path add folder name: "
read pathAddFolder
# Set the project directory
projectDir=$(pwd)/src/app/$pathAddFolder/$folderName

# Create the project directory and navigate into it
mkdir -p "$projectDir"
cd "$projectDir" || exit

# Create layout.tsx with the specified content
cat > layout.tsx <<EOL
export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode; }>) {
    return (<>{children}</>)
}
EOL

# Create an empty page.tsx file
touch page.tsx
cat > page.tsx <<EOL
export default function Page() {
    return (<>$folderName</>)
}
EOL
echo "Project $folderName has been set up in $projectDir"
