# Linux directory Structure

- Filesystem Hierarchy Standard (FHS)

![FHS](https://media.geeksforgeeks.org/wp-content/uploads/linuxDir.jpg)

### / (Root) 
- Primary hierarchy root and root directory of the entire file system hierarchy. 

### /bin - Essential User Binaries
- Essential command binaries that need to be available in single-user mode; for all users, e.g., cat, ls, cp. 

### /boot - Static Boot Files
- Kernel initrd, vmlinux, grub files are located under /boot

### /dev - Device Files
- Include terminal devices, usb, or any device attached to the system.

### /etc - Configuration Files
- Contains configuration files required by all programs.

### /home - Home Folders
- Home directories for all users to store their personal files.

### /lib - Essential Shared Libraries
- Libraries essential for the binaries in /bin and /sbin
- Libraries needed by the binaries in the /usr/bin folder are located in /usr/lib.

### /media – Removable Media
- Mount points for removable media such as CD-ROMs

### /mnt – Temporary Mount Points
- Temporarily mounted directory where sysadmins can mount filesystems.

### /opt - Optional Packages
- Add-on applications should be installed under either /opt/ or /opt/ sub-directory.

### /sbin - System Administration Binaries
- Contains essential binaries that are generally intended to be run by the root user for system administration.

### /srv - Service Data
- Data and scripts for web servers, data offered by FTP servers, and repositories for version control systems.

### /tmp - Temporary Files
- Files under this directory are deleted when system is rebooted.

### /usr - User Binaries & Read-Only Data
- Secondary hierarchy for read-only user data; contains the majority of (multi-)user utilities and applications.

### /var - Variable Data Files
- Writable counterpart to the /usr directory ( log files )
